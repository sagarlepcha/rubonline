const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route handlers for each page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/video', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'video.html'));
});

app.get('/family', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'family.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Homepage: http://localhost:${PORT}/`);
  console.log(`Video page: http://localhost:${PORT}/video`);
  console.log(`Family page: http://localhost:${PORT}/family`);
});