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

### Auth Routes
| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | `/api/auth`    | User authentication      |

### Business Routes
| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/api/business`    | Get business details            |
| POST   | `/api/business`    | Add business details            |
| PUT    | `/api/business/:id`| Update business details by ID   |
| DELETE | `/api/business/:id`| Delete business details by ID   |

### Service Routes
| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/api/services`    | Get all services                |
| GET    | `/api/services/:id`| Get a specific service by ID    |
| POST   | `/api/services`    | Add a new service               |
| PUT    | `/api/services/:id`| Update a service by ID          |
| DELETE | `/api/services/:id`| Delete a service by ID          |

### Meeting Routes
| Method | Endpoint           | Description                     |
|--------|--------------------|---------------------------------|
| GET    | `/api/meetings`    | Get all meetings                |
| GET    | `/api/meetings/:id`| Get a specific meeting by ID    |
| POST   | `/api/meetings`    | Add a new meeting               |
| PUT    | `/api/meetings/:id`| Update a meeting by ID          |
| DELETE | `/api/meetings/:id`| Delete a meeting by ID          |


## How to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
