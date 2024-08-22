const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Participant', participantSchema);
