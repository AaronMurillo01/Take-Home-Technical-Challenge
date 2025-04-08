# Node.js & MongoDB User API Challenge

Hey there! This project is a simple Node.js API built with Express. It connects to a MongoDB database to fetch user information.

## My Approach

I used the Express framework to create the web server and define the API route. Mongoose was chosen to connect to MongoDB, define the User schema, and handle database queries, including the specific requirement to filter users by age (> 21) directly in the database query. Error handling was implemented for invalid ObjectIds and cases where users are not found or don't meet the age criteria.


## What it Does

This API has a few neat tricks up its sleeve:

*   **Find Users by ID:** It provides a `GET /users/:id` endpoint to look up users.
*   **Talks to MongoDB:** It uses Mongoose to interact with a MongoDB database.
*   **Age Filter (The Twist!):** It's designed to only return users who are older than 21.
*   **Handles Errors Gracefully:** It knows how to deal with invalid user IDs and situations where a user isn't found (or doesn't meet the age requirement).

## Getting Started

Ready to try it out? Here’s how to get it running:

1.  **Clone the Code:** Grab a copy of this project onto your machine.
2.  **Install Dependencies:** Open your terminal in the project folder and run:
    ```bash
    npm install
    ```
3.  **Set Up Your Database:** You'll find a `.env` file. Open it and update the `MONGODB_URI` with your MongoDB connection string. You can also change the `PORT` if you like.
4.  **(Optional) Add Sample Data:** If you want some test users in your database, run:
    ```bash
    node seed.js
    ```
    This will add a few users (some older than 21, some younger) and print their IDs for easy testing.
5.  **Start the Server:**
    *   For regular use:
        ```bash
        npm start
        ```
    *   For development (it'll automatically restart when you change files):
        ```bash
        npm run dev
        ```
    You should see a message confirming the server is running and connected to MongoDB!

## Using the API

### GET /users/:id

This is the main endpoint. Use it to fetch a specific user by their MongoDB ObjectId, but remember, it will only return the user if their age is over 21!

**How it works:**

*   Replace `:id` in the URL with the actual ObjectId of the user you're looking for.

**Possible Responses:**

*   **`200 OK`:** Success! You'll get the user's details (name, email, age) in JSON format.
*   **`400 Bad Request`:** Oops! The ID you provided doesn't look like a valid MongoDB ObjectId.
*   **`404 Not Found`:** Either no user exists with that ID, or the user found is 21 or younger.
*   **`500 Internal Server Error`:** Something went wrong on the server side. Check the console for more details.

## User Data Structure

Just so you know, here's what the user data looks like in the database:

```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "johndoe@email.com",
  "age": 30
}
```

## Testing it Out

You can easily test the endpoint using tools like Postman, Insomnia, or even just `curl` in your terminal.

Here's an example using `curl` (replace the ID with one from your database, perhaps one printed by the `seed.js` script):

```bash
curl http://localhost:3000/users/YOUR_USER_ID_HERE
```

Try it with IDs of users older and younger than 21 to see the difference!# Node.js API with MongoDB Challenge

A simple Node.js Express API that connects to a MongoDB database and retrieves user data.

## Features

- GET endpoint at `/users/:id` that retrieves user data
- MongoDB integration
- Age filter (only returns users older than 21)
- Error handling for invalid ObjectId and user not found

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure your MongoDB connection in the `.env` file
4. Start the server:
   ```
   npm start
   ```
   Or for development with auto-reload:
   ```
   npm run dev
   ```

## API Endpoints

### GET /users/:id

Retrieves a user by their ID if they are older than 21.

**Parameters:**
- `id`: MongoDB ObjectId of the user

**Responses:**
- `200 OK`: Returns the user data
- `400 Bad Request`: If the ID format is invalid
- `404 Not Found`: If the user doesn't exist or is not older than 21
- `500 Internal Server Error`: If there's a server error

## Sample User Schema

```json
{ 
  "_id": "ObjectId", 
  "name": "John Doe", 
  "email": "johndoe@email.com", 
  "age": 30 
}
```

## Testing

You can test the API using tools like Postman or curl:

```
curl http://localhost:3000/users/60d21b4667d0d8992e610c85
```