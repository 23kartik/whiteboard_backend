const express= require("express");
const http=require("http");
const socketIO=require("socket.io")
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();
const cors = require('cors'); 

const { initializeDrawing } = require('./controllers/drawingController'); // Import the drawing controller


const app=express();
app.use(cors());
const server = http.createServer(app);


app.use(express.json());

mongoose.connect('mongodb+srv://23kartik:23kartik@cluster0.py7kx0e.mongodb.net/user_cred?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

initializeDrawing(server);

app.get('/', (req, res) => {
    res.send('Hello, welcome to the collaborative whiteboard!');
  });


  // Routes
app.use("/api/users",require("./routes/userRoutes"));


const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});