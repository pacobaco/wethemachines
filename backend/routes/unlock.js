const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // TODO: Add payment handling logic
  res.json({ success: true, message: "Node unlocked (demo)" });
});

module.exports = router;
