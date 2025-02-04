const express = require('express');
const mysql = require('mysql2');
const redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// MySQL connection
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Redis connection
const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello from Express backend!');
});

app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});
