const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRouter'); // Import the router correctly

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express server!' });
});

// Register user router under /users path
app.use('/users', userRouter); 

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});