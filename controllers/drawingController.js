const socketIO = require('socket.io');
const connectedUsers = new Map();

const initializeDrawing = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });
  io.on('connection', (socket) => {
    console.log('A user connected');
 

    socket.on('new-users', (userEmail) => {
      console.log('New user connected:', userEmail);
      // Add the user to the list of connected users
      connectedUsers.set(socket.id, userEmail);
      // Emit the list of connected users to all clients
      io.emit('update-users', Array.from(connectedUsers.values()));
        });


    socket.on('client-ready', () => {
        socket.broadcast.emit('get-canvas-state')
      })

      socket.on('canvas-state', (state) => {
        console.log('received canvas state')
        socket.broadcast.emit('canvas-state-from-server', state)
      })



socket.on('draw-line', ({ prevPoint, currentPoint, ctx, color, lineWidth  }) => {
    socket.broadcast.emit('draw-line', { prevPoint, currentPoint, ctx, color, lineWidth });
});
    socket.on('clear', () => io.emit('clear'))

    socket.on('disconnect', () => {
      console.log('User disconnected:', connectedUsers[socket.id]);
      connectedUsers.delete(socket.id);

      // Emit the updated list of connected users to all clients
      io.emit('update-users', Array.from(connectedUsers.values()));
    });
    if (socket.id in connectedUsers) {
      socket.emit('update-users', Array.from(connectedUsers.values()));
    }
  });
};

module.exports = { initializeDrawing };
