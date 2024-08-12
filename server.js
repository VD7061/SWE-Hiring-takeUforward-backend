const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const bannerRoutes = require('./routes/bannerRoutes.js');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT'],
}));


app.use(bodyParser.json());

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  next();
});

// Use the banner routes
app.use('/api', bannerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
