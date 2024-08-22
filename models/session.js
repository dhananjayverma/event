const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: String,
  startTime: Date,
  endTime: Date,
  speaker: { type: mongoose.Schema.Types.ObjectId, ref: 'Participant' }
});

module.exports = mongoose.model('Session', sessionSchema);
