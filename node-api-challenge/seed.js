const mongoose = require('mongoose');
const User = require('./models/User');
const connectDB = require('./db');
require('dotenv').config();

// Sample user data
const users = [
  {
    name: 'John Doe',
    email: 'johndoe@email.com',
    age: 30
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@email.com',
    age: 25
  },
  {
    name: 'Bob Johnson',
    email: 'bob@email.com',
    age: 19
  },
  {
    name: 'Alice Williams',
    email: 'alice@email.com',
    age: 22
  }
];

// Seed function
const seedDB = async () => {
  try {
    // Connect to the database
    await connectDB();
    
    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');
    
    // Insert new users
    const createdUsers = await User.insertMany(users);
    console.log(`Added ${createdUsers.length} users`);
    
    // Log the IDs for testing
    console.log('User IDs for testing:');
    createdUsers.forEach(user => {
      console.log(`${user.name} (age: ${user.age}): ${user._id}`);
    });
    
    // Close the connection
    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }
};

// Run the seed function
seedDB();