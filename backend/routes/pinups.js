const express = require('express');
const router = express.Router();

// Dummy data for demo
const nodes = [
  { id: 1, title: "Freemium Node 1", locked: false },
  { id: 2, title: "Premium Node 1", locked: true }
];

router.get('/', (req, res) => {
  res.json(nodes);
});

module.exports = router;
