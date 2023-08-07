const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const frontend = path.join(__dirname,'../frontend/build');
app.use(express.static(frontend));

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS, 
  }
});

app.post('/contact', (req, res) => {

  const { email, message } = req.body;

  console.log('Received request:', { email, message });

  const mailOptions = {
    from: process.env.USER,
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission',
    text: `
      Email: ${email}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email backend');
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true }); // Sending a success response to the frontend
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
