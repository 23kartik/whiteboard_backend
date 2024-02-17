// Import Mongoose
const mongoose = require('mongoose');

// Define the Room Schema
const roomSchema = new mongoose.Schema({
    roomId: {
        type: String,
        required: true,
        unique: true // Ensures that room IDs are unique
    },
    adminEmail: {
        type: String,
        required: true
    },
    // You can add more fields as needed
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});


module.exports = mongoose.model('Room', roomSchema);


