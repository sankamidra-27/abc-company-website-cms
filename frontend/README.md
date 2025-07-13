# CMS Heading Editor

A simple Content Management System (CMS) to edit and store the homepage heading dynamically. The CMS provides a UI to update the heading, which is fetched and rendered on the customer-facing website using an API.

---

## Backend Setup (Node.js + Express + SQLite)

### 1. Install Dependencies

cd backend
npm install

### 2. Run the Server

node server.js

By default, the server runs on: http://localhost:5000

---

## Database Configuration (SQLite)

The backend uses SQLite to store the heading text.

### site_heading Table Schema

CREATE TABLE site_heading (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text TEXT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

- text: The main heading to show on the website.
- updated_at: Timestamp of when the heading was last saved.

The table is automatically created on first run.

---

## Frontend Setup (React + Vite)

### 1. Create the frontend (if not already done)

npm create vite@latest frontend --template react
cd frontend
npm install

### 2. Start the Frontend Dev Server

npm run dev

Then open: http://localhost:5173

---

## API Documentation

### GET /api/heading

- Description: Retrieves the latest homepage heading.
- Request: GET http://localhost:5000/api/heading
- Response:

{
  "heading": "Hi This is Sankamidra"
}

---

### POST /api/heading

- Description: Stores a new heading in the database (replaces the latest one).
- Request: POST http://localhost:5000/api/heading
- Headers:
  Content-Type: application/json
- Body:

{
  "text": "Your new homepage heading here"
}

- Response:

{
  "message": "Heading saved!"
}

- Validation:
  - text is required.
  - Max length: 100 characters.

---

## Notes

- Make sure cors() is enabled in Express backend so frontend can connect.
- Heading is shown dynamically on the customer-facing site via API.
- CMS page uses textarea limited to 100 characters with real-time feedback.

---
