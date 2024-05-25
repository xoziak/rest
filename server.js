const express = require('express');
const userRoutes = require('./routes/userRoutes');
const db = require('./models');
var cors = require("cors");

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use(cors());
db.database.sync().then(() => {
  console.log('Database synced');
});

const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});