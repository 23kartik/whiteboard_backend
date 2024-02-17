// Import necessary modules
const asyncHandler=require("express-async-handler");

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Import the Room model (assuming you have defined it already)
const Room = require('../models/Room');


// Room Creation Endpoint
const createRoom = asyncHandler(async (req, res) => {
    const { roomId,userEmail } = req.body;
    // const { userEmail } = req.user; // Assuming you have user authentication middleware

    try {
        // Check if the room ID already exists
        const existingRoom = await Room.findOne({ roomId });

        if (existingRoom) {
            return res.status(400).json({ error: 'Room ID already exists' });
        }

        // Create a new room
        const newRoom = new Room({
            roomId,
            adminEmail: userEmail, // Associate the room with the admin's email
            // Other room data you may want to store
        });

        // Save the new room to the database
        await newRoom.save();

        res.status(201).json(newRoom);
    } catch (error) {
        console.error('Error creating room:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Room Termination Endpoint
const terminateRoom = asyncHandler(async (req, res) => {
    const { roomId } = req.params;
    const userEmail = req.query.userEmail;  // Assuming you have user authentication middleware

    try {
        // Find the room by ID
        const room = await Room.findOne({ roomId });

        // Check if the user requesting termination is the admin of the room
        if (room.adminEmail !== userEmail) {
            return res.status(403).json({ error: 'You are not authorized to terminate this room' });
        }

        // Remove the room from the database
        await Room.deleteOne({ roomId });
        res.status(200).json({ message: 'Room terminated successfully' });
    } catch (error) {
        console.error('Error terminating room:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Room ID Validation Middleware
const checkRoomIdExists = async (req, res, next) => {
    const { roomId } = req.body;

    try {
        // Check if the room ID already exists
        const existingRoom = await Room.findOne({ roomId });

        if (existingRoom) {
            return res.status(400).json({ error: 'Room ID already exists' });
        }

        next(); // Continue to the next middleware or route handler
    } catch (error) {
        console.error('Error checking room ID:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Room ID Validation for Joining room

const joinRoom = asyncHandler(async (req, res) => {
    const { roomId } = req.body;

    try {
        const existingRoom = await Room.findOne({ roomId });

        if (!existingRoom) {
            return res.status(404).json({ error: 'Room does not exist' });
        }
        return res.status(200).json({ error: 'Room exists and joined' });
        // Assuming further logic for joining the room here
    } catch (error) {
        console.error('Error checking room existence:', error);
        res.status(500).json({ error: 'Server error' });
    }
});
const getRoomData = asyncHandler(async (req, res) => {
    const { roomId } = req.params;

    try {
        // Find the room by ID
        const room = await Room.findOne({ roomId });

        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }

        res.status(200).json(room);
    } catch (error) {
        console.error('Error getting room data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = { createRoom, terminateRoom, checkRoomIdExists, joinRoom,getRoomData };

