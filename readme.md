## Event Management System

### Overview
The Event Management System is a backend API developed using Node.js and Express.js. It provides functionality to manage events, sessions, and participants. The system includes features for:

- Creating, updating, and deleting events
- Registering participants
- Generating detailed event reports in PDF format


## Features

- **Event Management:** Create, update, and delete events, and generate event reports.
- **Participant Registration:** Register participants and manage their event registrations.
- **Session Management:** Create and manage sessions within events.
- **PDF Reports:** Generate and download detailed event reports.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)



## Installation

1. **Clone the Repository**

    ```bash
    cd event-management-system
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Create a .env File**

    Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    MONGO_URI=mongodb://localhost:27017/event_management
    PORT=5000
    ```

4. **Start the Server**

    ```bash
    npm start
    ```

    The server will be running on `http://localhost:5000`.

## Usage

You can test the API endpoints using Postman or any other API testing tool.

### Example Requests

- **Create Event**


### Example Request

- **Method:** POST
- **URL:** `http://localhost:5000/api/events`
- **Body (JSON):**

  ```json
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

### Get Event by ID

- **Method:** GET
- **URL:** `http://localhost:5000/api/events/{id}`

### Update Event

- **Method:** PUT
- **URL:** `http://localhost:5000/api/events/{id}`
- **Body (JSON):** Provide updated event details

### Update Event

- **Method:** PUT
- **URL:** `http://localhost:5000/api/events/{id}`
- **Body (JSON):** Provide updated event details

### Delete Event

- **Method:** DELETE
- **URL:** `http://localhost:5000/api/events/{id}`

### Generate Event Report

- **Method:** GET
- **URL:** `http://localhost:5000/api/events/{id}/report`

## API Endpoints

### Events

- **POST /api/events:** Create a new event.
- **GET /api/events/:id:** Retrieve an event by ID.
- **PUT /api/events/:id:** Update an event by ID.
- **DELETE /api/events/:id:** Delete an event by ID.
- **GET /api/events/:id/report:** Generate a PDF report for an event.


## API Endpoints

### Events
- **POST /api/events:** Create a new event.
- **GET /api/events/:id:** Retrieve an event by ID.
- **PUT /api/events/:id:** Update an event by ID.
- **DELETE /api/events/:id:** Delete an event by ID.
- **GET /api/events/:id/report:** Generate a PDF report for an event.

### Participants
- **POST /api/participants:** Create a new participant.
- **GET /api/participants/:id:** Retrieve a participant by ID.
- **POST /api/participants/register:** Register a participant to an event.

### Sessions
- **POST /api/sessions:** Create a new session.
- **GET /api/sessions/:id:** Retrieve a session by ID.

Environment Variables
The project requires the following environment variables:

MONGO_URI: MongoDB connection string.
PORT: Port number for the server.



## Environment Variables

The project requires the following environment variables:

- **MONGO_URI:** MongoDB connection string.
- **PORT:** Port number for the server.
