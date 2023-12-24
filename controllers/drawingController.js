const socketIO = require('socket.io');

const initializeDrawing = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('draw', (data) => {
      io.emit('draw', data);
    });

    socket.on('disconnect', () => {
      console.log('User is disconnected');
    });
  });
};

module.exports = { initializeDrawing };