// server.js
const express = require('express');
const { PrismaClient } = require('@prisma/client'); // import PrismaClient
const prisma = new PrismaClient(); // initialize PrismaClient

const app = express();

// Home endpoint to check if the server is running
app.get('/', (req, res) => {
    res.send('Server is running on LAN');
});

// Find your local IP address, replace '192.168.x.x' with your actual local IP
const LAN_IP = '192.168.0.154';  // Replace with your actual IP
const PORT = 3000;

// Start server on the LAN IP
app.listen(PORT, LAN_IP, () => {
    console.log(`Server is running on http://${LAN_IP}:${PORT}`);
});
