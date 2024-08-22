const ParticipantService = require('../services/participantService');
const EventService = require('../services/eventService');

exports.createParticipant = async (req, res) => {
  try {
    const participant = await ParticipantService.createParticipant(req.body);
    res.status(201).json(participant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getParticipant = async (req, res) => {
  try {
    const participant = await ParticipantService.getParticipantById(req.params.id);
    if (!participant) return res.status(404).json({ message: 'Participant not found' });
    res.json(participant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.registerParticipantToEvent = async (req, res) => {
  try {
    const { eventId, participantId } = req.body;

    // Check if event exists and is not full
    const event = await EventService.getEventById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    if (event.participants.length >= 100) return res.status(400).json({ message: 'Event is full' });

    // Add participant to event
    event.participants.push(participantId);
    await event.save();
    
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
