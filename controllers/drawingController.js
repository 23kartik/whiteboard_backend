 const socketIO=require("socket.io");

 const initializeDrawing=(server)=>{
    const io=socketIO(server);

    io.on('connection', (socket) => {
        console.log('A user connected');

        socket.on('draw',(data)=>{
            io.emit('draw',data);
        });

        socket.on('disconnect',()=>{
        console.log('user is disconnected');
        });
    });


 }

 module.exports={initializeDrawing};