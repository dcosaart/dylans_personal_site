// Import required modules
//import express from 'express';
//import mysql from 'mysql2';
//import bodyParser from 'body-parser';
//import cors from 'cors';
const express = require('express'); // Express framework for building web applications
const mysql = require('mysql2'); // MySQL client for Node.js
const bodyParser = require('body-parser'); // Middleware for parsing incoming request bodies
const cors = require('cors'); // Middleware for enabling Cross-Origin Resource Sharing
//Create an Express application
const app = express();
const port = 5173; // Port number where the server will listen for requests

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests and put the parsed data in req.body
app.use(cors()); // Enable all CORS requests

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost', // Hostname of the MySQL server
    user: 'root', // Your MySQL username
    password: 'Phinz22!', // Your MySQL password
    database: 'company' // Name of the database to connect to
});

// Connect to the MySQL database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err); // Log error if connection fails
        return;
    }
    console.log('Connected to the MySQL database'); // Log success message if connection is successful
});

// Define a route to get data from the MySQL database
const getData = (req, res) => {
    const { prodName, cityName, minQuant, maxQuant, minPrice, maxPrice } = req.query;

    // Building the query with conditions
    let query = 'SELECT * FROM products WHERE 1=1';
    const queryParams = [];

    if (prodName) {
        query += ' AND pname LIKE ?';
        queryParams.push(`%${prodName}%`);
    }
    if (cityName) {
        query += ' AND city LIKE ?';
        queryParams.push(`%${cityName}%`);
    }
    if (minQuant) {
        query += ' AND quantity >= ?';
        queryParams.push(Number(minQuant));
    }
    if (maxQuant) {
        query += ' AND quantity <= ?';
        queryParams.push(Number(maxQuant));
    }
    if (minPrice) {
        query += ' AND price >= ?';
        queryParams.push(Number(minPrice));
    }
    if (maxPrice) {
        query += ' AND price <= ?';
        queryParams.push(Number(maxPrice));
    }
    query += ';';

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error executing query');
        } else {
            res.json(results);
        }
    });
};


// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log message when server starts successfully
});

app.get('/api/data', getData);
