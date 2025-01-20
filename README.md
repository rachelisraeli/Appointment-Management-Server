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
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user.
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
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Description**: Logs in a user.
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

### Services Routes

#### Get All Services
- **URL**: `/api/services`
- **Method**: `GET`
- **Description**: Fetches all services.

#### Get Service by ID
- **URL**: `/api/services/:id`
- **Method**: `GET`
- **Description**: Fetches a service by its ID.

#### Add a New Service
- **URL**: `/api/services`
- **Method**: `POST`
- **Description**: Adds a new service.
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
- **URL**: `/api/services/:id`
- **Method**: `PUT`
- **Description**: Updates an existing service.
- **Request Body**: Similar to adding a new service.

#### Delete a Service
- **URL**: `/api/services/:id`
- **Method**: `DELETE`
- **Description**: Deletes a service by its ID.

### Meetings Routes

#### Add a New Meeting
- **URL**: `/api/meetings`
- **Method**: `POST`
- **Description**: Adds a new meeting.
- **Request Body**:
  ```json
  {
    "name": "string",
    "phone": "string",
    "email": "string",
    "meetingDuration": "Date"
  }
  ```

#### Error Handling
In case of any errors, the server will respond with appropriate HTTP status codes and error messages.

