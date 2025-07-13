const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create or open database
const db = new sqlite3.Database(path.resolve(__dirname, 'cms.db'), (err) => {
  if (err) {
    console.error('Failed to connect to DB:', err.message);
  } else {
    console.log('Connected to SQLite DB');
  }
});

// Create table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS site_heading (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

module.exports = db;
