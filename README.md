# Appointment Management Server

## Overview
This project is a backend server for managing appointments, services, and business operations. It is built using Node.js, Express.js, and MongoDB. The server provides RESTful API endpoints for CRUD operations on various resources like users, businesses, services, and meetings.

## Features
- **User Authentication:** Authentication routes to manage user login and registration.
- **Service Management:** Endpoints for adding, retrieving, updating, and deleting services.
- **Meeting Scheduling:** API for managing meeting appointments.
- **Business Data Management:** API for storing and retrieving business details.
- **MongoDB Integration:** Data persistence using MongoDB with Mongoose.
- **Environment Configuration:** Supports `.env` for sensitive configuration.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **dotenv** for environment variables
- **CORS** for handling cross-origin requests

## Installation

### Prerequisites
1. Install [Node.js](https://nodejs.org/).
   
2. Install [MongoDB](https://www.mongodb.com/) and ensure it is running locally or have access to a MongoDB Atlas instance.

3. Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/rachelisraeli/Appointment-Management-Server.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd Appointment-Management-Server
   ```
   
3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Start the server:
   ```bash
   npm start
   ```

The server will run at `http://localhost:5000` by default.

## API Endpoints

### Authentication Routes

#### Register a New User
- `POST  /api/auth/register`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **201 Created**: Successfully registered.
  - **400 Bad Request**: Validation error.

#### User Login
- `POST  /api/auth/login`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **200 OK**: Successfully logged in with a JWT token.
  - **401 Unauthorized**: Invalid credentials.

### Business details

#### Get the business details
- `GET  /api/business`

#### Add business details
- `POST  /api/business`

#### Update the business details
- `PUT  /api/business`

### Services Routes

#### Get All Services
- `GET  /api/services`
  
#### Get Service by ID
- `GET  /api/services/:id`

#### Add a New Service
- `POST  /api/services`
- **Request Body**:
  ```json
  {
    "name": "string",
    "description": "string",
    "price": "number",
    "meetingDuration": "number"
  }
  ```

#### Update a Service
- `PUT  /api/services/:id`

#### Delete a Service
- `DELETE  /api/services/:id`

### Meetings Routes

#### Get All Meetings
- `GET  /api/meetings`

#### Get Meeting by ID
- `GET  /api/meetings/:id`

#### Add a New Meeting
- `POST  /api/meetings`
- **Request Body**:
  ```json
  {
    "name": "string",
    "phone": "string",
    "email": "string",
    "meetingDuration": "Date"
  }
  ```

#### Update a Meeting
- `PUT  /api/meetings/:id`
- **Request Body**: Similar to adding a new meeting.

#### Delete a Meetinh
- `DELETE  /api/meetings/:id`

#### Error Handling
In case of any errors, the server will respond with appropriate HTTP status codes and error messages.

