const express = require('express');
const cors = require("cors");
const {initDB} = require("./models");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(cors({
  origin: "*", // update to match the domain you will make the request from
}))

app.use('/api/remr', require('./routes/remrRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.get('/api/test', (req, res) => {
  res.send('Hello from Express backend!');
});

initDB().then(() => {
  app.listen(port, () => {console.log(`Backend server running on port ${port}`);
})});
