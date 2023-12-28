const asyncHandler=require("express-async-handler");
const User=require("../models/User");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const Drawing = require('../models/Drawing');


//SignUp
const registerUser=asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable=await User.findOne({email})
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    //Hash password
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await User.create({
        username,
        email,
        password:hashedPassword,
    })
    if(user){
        res.status(200).json({ _id: user.id, email: user.email});
    }
    else{
        res.status(400);
        throw new Error("User data not valid");
    }
    
});

//Login
const loginUser=asyncHandler(async (req,res)=>{

    try {

    const {email,password}=req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const user=await User.findOne({email});

    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken =jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:"60m"}
        );
        res.status(200).json({accessToken});
    }
        else{
            res.status(401);
            throw new Error("email or password invalid");

        }
    }
    catch (err) {
        res.json("Error in controller layer")
    }
});

//saveDrawing

// Inside saveDrawings controller
const saveDrawings = asyncHandler(async (req, res) => {
    try {
      const { email, drawingData } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        res.status(404);
        throw new Error('User not found');
      }
  
      const drawing = await Drawing.findOne({ userEmail: email });
  
      if (!drawing) {
        console.log('New drawing');
  
        await Drawing.create({
          userEmail: email,
          drawingData: drawingData, // Save the data URL directly
        });
      } else {
        console.log('Updating the drawing');
        drawing.drawingData = drawingData; // Update the data URL
        await drawing.save();
      }
  
      res.status(200).json({ message: 'Drawing saved successfully' });
    } catch (error) {
      console.error('Error saving drawing:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  
  // Inside loadDrawings controller
const loadDrawings = asyncHandler(async (req, res) => {
    try {
      const { email } = req.query;
  
      const user = await User.findOne({ email });
  
      if (!user) {
        res.status(404);
        throw new Error('User not found');
      }
  
      const drawing = await Drawing.findOne({ userEmail: email });
  
      if (!drawing) {
        res.status(404);
        throw new Error('Drawing not found');
      }
  
      const drawingData = drawing.drawingData; // Send the stringified data URL to the frontend
      
  
      res.status(200).json({ drawingData });
    } catch (error) {
      res.status(500).json({ error: 'Error loading drawing data' });
    }
  });
  
  

    module.exports = { registerUser, loginUser, saveDrawings, loadDrawings };