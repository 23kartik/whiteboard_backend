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

    socket.on('client-ready', () => {
        socket.broadcast.emit('get-canvas-state')
      })

      socket.on('canvas-state', (state) => {
        console.log('received canvas state')
        socket.broadcast.emit('canvas-state-from-server', state)
      })



    socket.on('draw-line', ({ prevPoint, currentPoint, color }) => {
        socket.broadcast.emit('draw-line', { prevPoint, currentPoint, color })
      })
    socket.on('clear', () => io.emit('clear'))

    socket.on('disconnect', () => {
      console.log('User is disconnected');
    });
    
  });
};

module.exports = { initializeDrawing };
