# Calry Room Service Request API

This repository contains the Room Service Request API for the Calry Internship assignment. The project implements a set of RESTful APIs to manage and prioritize hotel room service requests using a backend system that utilizes JSON files for temporary data storage.

## Project Overview

The Room Service Request API helps hotel staff manage room service operations effectively, ensuring that urgent and high-priority requests are serviced promptly to enhance guest satisfaction and operational efficiency.

### Features:

- Create, update, retrieve, and delete room service requests.
- Prioritize requests based on urgency and guest status.
- Mark requests as completed.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mihir2004/calryassignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd calryassignment
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the API Server

To start the server, run the following command:

```bash
npm start
```

The server will start on `http://localhost:3000`.

## API Documentation

### Base URL

`http://localhost:3000`

### Endpoints

#### 1. Add a New Service Request

- **URL**: `/requests`
- **Method**: `POST`
- **Description**: Add a new room service request.
- **Request Body**:
  ```json
  {
    "guestName": "John Doe",
    "roomNumber": 101,
    "requestDetails": "Need extra towels and toiletries",
    "priority": 1,
    "status": "received"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Request added successfully",
    "request": {
      "id": "1694801234567",
      "guestName": "John Doe",
      "roomNumber": 101,
      "requestDetails": "Need extra towels and toiletries",
      "priority": 1,
      "status": "received"
    }
  }
  ```

#### 2. Get All Requests

- **URL**: `/requests`
- **Method**: `GET`
- **Description**: Retrieve all service requests sorted by priority.
- **Response**:
  ```json
  [
    {
      "id": "1694801234567",
      "guestName": "John Doe",
      "roomNumber": 101,
      "requestDetails": "Need extra towels and toiletries",
      "priority": 1,
      "status": "received"
    },
    {
      "id": "1694801237890",
      "guestName": "Jane Smith",
      "roomNumber": 202,
      "requestDetails": "Dinner service",
      "priority": 2,
      "status": "in progress"
    }
  ]
  ```

#### 3. Get a Specific Request by ID

- **URL**: `/requests/:id`
- **Method**: `GET`
- **Description**: Retrieve a specific service request using its ID.
- **Response**:
  ```json
  {
    "id": "1694801234567",
    "guestName": "John Doe",
    "roomNumber": 101",
    "requestDetails": "Need extra towels and toiletries",
    "priority": 1,
    "status": "received"
  }
  ```

#### 4. Update a Request by ID

- **URL**: `/requests/:id`
- **Method**: `PUT`
- **Description**: Update details or priority of an existing request.
- **Request Body**:
  ```json
  {
    "priority": 3
  }
  ```
- **Response**:
  ```json
  {
    "message": "Request updated successfully",
    "request": {
      "id": "1694801234567",
      "guestName": "John Doe",
      "roomNumber": 101,
      "requestDetails": "Need extra towels and toiletries",
      "priority": 3,
      "status": "received"
    }
  }
  ```

#### 5. Mark a Request as Completed

- **URL**: `/requests/:id/complete`
- **Method**: `POST`
- **Description**: Change the status of a service request to `completed`.
- **Response**:
  ```json
  {
    "message": "Request marked as completed",
    "request": {
      "id": "1694801234567",
      "guestName": "John Doe",
      "roomNumber": 101,
      "requestDetails": "Need extra towels and toiletries",
      "priority": 3,
      "status": "completed"
    }
  }
  ```

#### 6. Delete a Request by ID

- **URL**: `/requests/:id`
- **Method**: `DELETE`
- **Description**: Remove a service request using its ID.
- **Response**:
  ```json
  {
    "message": "Request deleted successfully",
    "deletedId": "1694801234567"
  }
  ```

## Contact

For any questions or feedback, reach out to [tech@calry.app](mailto:tech@calry.app).

We look forward to your contributions!
