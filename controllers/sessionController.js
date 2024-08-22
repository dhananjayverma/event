const SessionService = require('../services/sessionService');
const EventService = require('../services/eventService');

exports.createSession = async (req, res) => {
  try {
    const session = await SessionService.createSession(req.body);
    
    // Optionally add session to an event
    if (req.body.eventId) {
      const event = await EventService.getEventById(req.body.eventId);
      if (event) {
        event.sessions.push(session._id);
        await event.save();
      }
    }
    
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSession = async (req, res) => {
  try {
    const session = await SessionService.getSessionById(req.params.id);
    if (!session) return res.status(404).json({ message: 'Session not found' });
    res.json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
