const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.get('SELECT text FROM site_heading ORDER BY updated_at DESC LIMIT 1', (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ heading: row?.text || '' });
  });
});

router.post('/', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  db.run('INSERT INTO site_heading (text) VALUES (?)', [text], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Heading saved' });
  });
});

module.exports = router;
