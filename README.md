# User API Challenge: Node.js & MongoDB

This project is a simple Node.js API built on Express. It connects to a MongoDB database using Mongoose to fetch and display user information.

## Features

- **GET /users/:id:** Retrieve a user by their ID.
- **MongoDB Integration:** Connects to MongoDB using Mongoose.
- **Age Filter:** Only returns users who are older than 21.
- **Robust Error Handling:** Gracefully handles invalid user IDs, missing users, or users who do not meet the age criteria.

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the Repository:**  
   Clone this project to your local machine.

2. **Install Dependencies:**  
   Open your terminal in the project folder and run:
   ```bash
   npm install
   ```

## Using the API

### GET /users/:id

This is the main endpoint. Use it to fetch a specific user by their MongoDB ObjectId, but remember, it will only return the user if their age is over 21!

**How it works:**

- Replace `:id` in the URL with the actual ObjectId of the user you're looking for.

**Possible Responses:**

- **`200 OK`:** Success! You'll get the user's details (name, email, age) in JSON format.
- **`400 Bad Request`:** Oops! The ID you provided doesn't look like a valid MongoDB ObjectId.
- **`404 Not Found`:** Either no user exists with that ID, or the user found is 21 or younger.
- **`500 Internal Server Error`:** Something went wrong on the server side. Check the console for more details.

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
