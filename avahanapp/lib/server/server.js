// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/Registration.Registration_form', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const registrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  branch: String,
  year: Number,
  phoneNumber: String,
  email: String,
  sport: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

app.use(express.json());

app.post('/register', async (req, res) => {
  const registration = new Registration(req.body);
  await registration.save();
  res.send({ message: 'Registration successful' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
