const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

// Route to create a new session
router.post('/', sessionController.createSession);

// Route to get a session by ID
router.get('/:id', sessionController.getSession);

module.exports = router;
