const express = require('express');
const cors = require("cors");
const {initDB} = require("./models");

const avtentikacijaRoutes = require('./routes/avtentikacijaRoutes');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:4200'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization'],
  credentials: true
}));

app.use('/api/auth', avtentikacijaRoutes);

app.get('/api/test', (req, res) => {
  res.send('Hello from Express backend!');
});

initDB().then(() => {
  app.listen(port, "0.0.0.0", () => {console.log(`Backend server running on port ${port}`);
})});

