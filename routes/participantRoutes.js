const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');

// Route to create a new participant
router.post('/', participantController.createParticipant);

// Route to get a participant by ID
router.get('/:id', participantController.getParticipant);

// Route to register a participant to an event
router.post('/register', participantController.registerParticipantToEvent);

module.exports = router;
