const mongoose = require('mongoose');


const drawingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  drawingData: {
    type: String, // assuming drawingData is a string (data URL)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Drawing', drawingSchema);
