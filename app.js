const express = require('express');
const app = express();
const connectDB = require('./config/db');
const eventRoutes = require('./routes/eventRoutes');
const participantRoutes = require('./routes/participantRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

require('dotenv').config();

connectDB();

app.use(express.json());

// Mount routes
app.use('/api/events', eventRoutes);
app.use('/api/participants', participantRoutes);
app.use('/api/sessions', sessionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
