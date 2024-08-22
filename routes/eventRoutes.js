const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Route to create a new event
router.post('/', eventController.createEvent);

// Route to get an event by ID
router.get('/:id', eventController.getEvent);

// Route to update an event by ID
router.put('/:id', eventController.updateEvent);

// Route to delete an event by ID
router.delete('/:id', eventController.deleteEvent);

// Route to generate and download a PDF report for an event
router.get('/:id/report', eventController.generateEventReport);

module.exports = router;
