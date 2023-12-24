const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
});

const lineSchema = new mongoose.Schema({
  points: { type: [pointSchema], required: true },
  brushColor: { type: String, required: true },
  brushRadius: { type: Number, required: true },
});

const drawingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  lines: { type: [lineSchema], required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
});

module.exports = mongoose.model('Drawing', drawingSchema);
