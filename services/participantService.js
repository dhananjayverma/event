const Participant = require('../models/participant');

class ParticipantService {
  async createParticipant(participantData) {
    const participant = new Participant(participantData);
    return await participant.save();
  }

  async getParticipantById(id) {
    return await Participant.findById(id);
  }
}

module.exports = new ParticipantService();
