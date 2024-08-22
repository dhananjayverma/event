const Session = require('../models/session');

class SessionService {
  async createSession(sessionData) {
    const session = new Session(sessionData);
    return await session.save();
  }

  async getSessionById(id) {
    return await Session.findById(id);
  }
}

module.exports = new SessionService();
