// server.js

// import data from "./data.json";
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5000/data",
};


const PORT = 5000;
const DATA_FILE = path.join(__dirname, './data.json');

// Middleware to parse JSON data
// app.use(express.json());
app.use(cors(corsOptions));

// POST route to receive JSON data and store it in data.json
app.post('/data', (req, res) => {
  const newData = req.body;

  // Read the existing data from data.json
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading data file' });
    }

    // Parse the existing data
    const jsonData = JSON.parse(data);

    // Add new data to the array
    jsonData.push(newData);

    // Write the updated data back to data.json
    fs.writeFile(DATA_FILE, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error writing to data file' });
      }

      res.status(201).json({ message: 'Data added successfully', data: newData });
    });
  });
});

// GET route to retrieve JSON data from data.json
app.get('/data', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading data file' });
    }

    // Parse and send the JSON data
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("hi");
});
