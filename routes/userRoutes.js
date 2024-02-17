const express = require("express");
const { registerUser, loginUser, saveDrawings, loadDrawings } = require("../controllers/userController");
const { createRoom, terminateRoom, checkRoomIdExists,joinRoom, getRoomData } = require("../controllers/roomController");
const { sendEmail } = require('../controllers/emailController');
const router = express.Router();

// User Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/save-drawings', saveDrawings);
router.get('/load-drawings', loadDrawings);

// Room Routes
router.post('/rooms', checkRoomIdExists, createRoom);
router.delete('/rooms/:roomId', terminateRoom);

// Room Joining Route
router.post('/rooms/join', joinRoom); // Assuming joinRoom handler is defined
router.get('/rooms/:roomId', getRoomData);


router.post('/send-email', sendEmail);
module.exports = router;
