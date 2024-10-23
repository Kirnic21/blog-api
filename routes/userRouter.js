const express = require('express');
const router = express.Router();

// Define user-related routes
router.get('/', (req, res) => {
  res.send('Get user');
});

router.post('/', (req, res) => {
  res.send('POST: You created the user.');
});

router.put('/', (req, res) => {
  res.send('PUT: You updated the user.');
});

router.delete('/', (req, res) => {
  res.send('DELETE: You deleted the user.');
});

module.exports = router;
