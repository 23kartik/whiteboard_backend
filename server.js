const express= require("express");
const http=require("http");
const socketIO=require("socket.io")
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();

const app=express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());
app.use(express.json());
mongoose.connect('mongodb+srv://23kartik:23kartik@cluster0.py7kx0e.mongodb.net/user_cred?retryWrites=true&w=majority');

// Socket.io events
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle whiteboard events (we'll add this later)

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.get('/', (req, res) => {
    res.send('Hello, welcome to the collaborative whiteboard!');
  });


  
  // Routes
app.use("/api/users",require("./routes/userRoutes"));
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});