const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mernproject');

// Check the MongoDB connection
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Connection Failed:', error.message);
});
db.once('open', () => {
  console.log('Connected to the database');
});