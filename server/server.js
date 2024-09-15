const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const plantRoutes = require('./routes/plants');
const communityRoutes = require('./routes/community');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/productRoutes');
const Product = require('./models/Product'); 
const nodemailer = require('nodemailer');

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/auth', authRoutes);
app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/plants', require('./routes/plants'));
app.use('/community', communityRoutes);
app.use('/api/products', productRoutes);
app.use((req, res, next) => {
    res.setHeader(
      'Content-Security-Policy',
      "script-src 'self' https://gc.kis.v2.scr.kaspersky-labs.com"
    );
    next();
});

// Set up Nodemailer transporter
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME, 
    pass: process.env.EMAIL_PASSWORD
  }
});

// Route to handle email subscriptions
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body; // Capture email from the request body
  const mailOptions = {
    from: '"Your Name" <' + process.env.EMAIL_USERNAME + '>', // Sender address
    to: email, // Recipient email from the request
    subject: 'Welcome to Our Community!', // Subject line
    text: 'Thank you for subscribing!', // Plain text body
    html: '<b>Thank you for subscribing!</b>' // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Subscription email sent successfully to ' + email);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send subscription email');
  }
});

// Example backend search route in Node.js (Express)
app.get('/api/search', async (req, res) => {
    const searchQuery = req.query.q.toLowerCase();

    try {
        const products = await Product.find();  // Fetch all products from the database
        const filteredResults = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery)
        );
        res.json(filteredResults);
    } catch (error) {
        console.error('Failed to fetch products:', error);
        res.status(500).send('Server error');
    }
});

// Test route to check database connection
app.get('/api/test-db', async (req, res) => {
    try {
        const profiles = await require('./models/Profile').find();
        res.json(profiles);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
