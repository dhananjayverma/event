const Event = require('../models/event');

class EventService {
  async createEvent(eventData) {
    const event = new Event(eventData);
    return await event.save();
  }

  async getEventById(id) {
    return await Event.findById(id).populate('sessions').populate('participants');
  }

  async updateEvent(id, eventData) {
    return await Event.findByIdAndUpdate(id, eventData, { new: true });
  }

  async deleteEvent(id) {
    return await Event.findByIdAndDelete(id);
  }
}

module.exports = new EventService();
