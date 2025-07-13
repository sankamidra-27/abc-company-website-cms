const express = require('express');
const cors = require('cors');
const headingRoutes = require('./routes/headingRoutes');

const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON bodies

// API route
app.use('/api/heading', headingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
