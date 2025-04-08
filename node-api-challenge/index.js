const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
require('dotenv').config();

// Import User model
const User = require('./models/User');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// GET endpoint for retrieving user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Check if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }
    
    // Find user by ID and ensure age is greater than 21
    const user = await User.findOne({ 
      _id: id,
      age: { $gt: 21 }
    });
    
    // If no user is found, return 404
    if (!user) {
      return res.status(404).json({ message: 'User not found or age requirement not met' });
    }
    
    // Return the user data
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Define port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});