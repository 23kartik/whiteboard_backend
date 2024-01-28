const socketIO = require('socket.io');
const connectedUsers = new Map();
const userRooms = new Map(); // Tracks which room each user is in

const initializeDrawing = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join-room', (roomName, userEmail) => {
      // Join the specified room
      socket.join(roomName);

      // Track which room the user is in
      userRooms.set(socket.id, roomName);

      // Add the user to the list of connected users for this room
      if (!connectedUsers.has(roomName)) {
        connectedUsers.set(roomName, new Map());
      }
      connectedUsers.get(roomName).set(socket.id, userEmail);

      // Emit the list of connected users in this room to all clients in the room
      io.to(roomName).emit('update-users', Array.from(connectedUsers.get(roomName).values()));
    });

    socket.on('client-ready', () => {
      const roomName = userRooms.get(socket.id);
      io.to(roomName).emit('get-canvas-state');
    });

    socket.on('canvas-state', (state) => {
      const roomName = userRooms.get(socket.id);
      io.to(roomName).emit('canvas-state-from-server', state);
    });

    socket.on('send-message', ({ roomName, message, role, timestamp }) => {
      const userEmail = connectedUsers.get(roomName).get(socket.id);
      socket.emit('receive-message', { user: userEmail, message, role: 'sender', timestamp });
      socket.to(roomName).emit('receive-message', { user: userEmail, message, role: 'reciever', timestamp });
    });

    socket.on('draw-line', ({ roomName, prevPoint, currentPoint, ctx, color, lineWidth }) => {
      io.to(roomName).emit('draw-line', { prevPoint, currentPoint, ctx, color, lineWidth });
    });

    socket.on('clear', () => {
      const roomName = userRooms.get(socket.id);
      io.to(roomName).emit('clear');
    });

    socket.on('disconnect', () => {
      if (userRooms.has(socket.id)) {
        const roomName = userRooms.get(socket.id);
        console.log('User disconnected:', connectedUsers.has(roomName) ? connectedUsers.get(roomName).get(socket.id) : 'Unknown User');
        if (connectedUsers.has(roomName)) {
          connectedUsers.get(roomName).delete(socket.id);
          // Emit the updated list of connected users in this room to all clients in the room
          io.to(roomName).emit('update-users', Array.from(connectedUsers.get(roomName).values()));
        }
        userRooms.delete(socket.id);
      } else {
        console.log('User disconnected before joining any room');
      }
    });
    
  });
};

module.exports = { initializeDrawing };
