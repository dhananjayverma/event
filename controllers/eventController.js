const EventService = require('../services/eventService');
const PDFService = require('../services/pdfService');
const { eventSchema } = require('../utils/validation');

exports.createEvent = async (req, res) => {
  try {
    // Validate request body
    const { error } = eventSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const event = await EventService.createEvent(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await EventService.getEventById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { error } = eventSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const event = await EventService.updateEvent(req.params.id, req.body);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await EventService.deleteEvent(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.generateEventReport = async (req, res) => {
  try {
    const event = await EventService.getEventById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    PDFService.generateEventReport(event);
    res.download(`event_${event._id}.pdf`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
