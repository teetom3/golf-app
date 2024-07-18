const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  approved: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
