Event Management System
Overview
The Event Management System is a backend API developed using Node.js and Express.js. It provides functionality to manage events, sessions, and participants. The system includes features for creating, updating, and deleting events, registering participants, and generating detailed event reports in PDF format.

Features
Event Management: Create, update, delete events, and generate event reports.
Participant Registration: Register participants and manage their event registrations.
Session Management: Create and manage sessions within events.
PDF Reports: Generate and download detailed event reports.
Table of Contents
Installation
Usage
API Endpoints
Environment Variables
Contributing
License
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/event-management-system.git
Navigate to the Project Directory

bash
Copy code
cd event-management-system
Install Dependencies

bash
Copy code
npm install
Create a .env File
Create a .env file in the root directory and add the following environment variables:

plaintext
Copy code
MONGO_URI=mongodb://localhost:27017/event_management
PORT=5000
Start the Server

bash
Copy code
npm start
The server will be running on http://localhost:5000.

Usage
You can test the API endpoints using Postman or any other API testing tool.

Example Requests
Create Event

Method: POST
URL: http://localhost:5000/api/events
Body (JSON):
json
Copy code
{
  "name": "Tech Conference",
  "date": "2024-09-15T10:00:00Z",
  "sessions": [
    {
      "title": "Keynote Speech",
      "startTime": "2024-09-15T10:00:00Z",
      "endTime": "2024-09-15T11:00:00Z",
      "speaker": "64e2c5e4f13a8b9f12345678"
    }
  ],
  "participants": []
}
Get Event by ID

Method: GET
URL: http://localhost:5000/api/events/{id}
Update Event

Method: PUT
URL: http://localhost:5000/api/events/{id}
Body (JSON): Provide updated event details
Delete Event

Method: DELETE
URL: http://localhost:5000/api/events/{id}
Generate Event Report

Method: GET
URL: http://localhost:5000/api/events/{id}/report
API Endpoints
Events

POST /api/events: Create a new event.
GET /api/events/:id: Retrieve an event by ID.
PUT /api/events/:id: Update an event by ID.
DELETE /api/events/:id: Delete an event by ID.
GET /api/events/:id/report: Generate a PDF report for an event.
Participants

POST /api/participants: Create a new participant.
GET /api/participants/:id: Retrieve a participant by ID.
POST /api/participants/register: Register a participant to an event.
Sessions

POST /api/sessions: Create a new session.
GET /api/sessions/:id: Retrieve a session by ID.
Environment Variables
The project requires the following environment variables:

MONGO_URI: MongoDB connection string.
PORT: Port number for the server.
Contributing
Fork the Repository
Create a New Branch
bash
Copy code
git checkout -b feature/your-feature
Make Your Changes
Commit Your Changes
bash
Copy code
git commit -am 'Add new feature'
Push to the Branch
bash
Copy code
git push origin feature/your-feature
Create a Pull Request
Submit a pull request to merge your changes into the main repository.