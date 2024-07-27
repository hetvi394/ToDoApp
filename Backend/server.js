const express = require('express');
const mongoose = require('mongoose');
const routes= require('./Routes/ToDo')
const cors = require("cors")

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected To MongoDB...`))
  .catch((err) => console.log(err));

app.use(routes)
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
