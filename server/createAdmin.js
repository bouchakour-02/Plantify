// createAdmin.js
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

async function createAdminUser() {
    const email = 'admin@example.com';
    const password = 'adminadmin';
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        email,
        password: hashedPassword,
        isAdmin: true, // This is the key part!
    });

    await newUser.save();
    console.log('Admin user created');
    mongoose.disconnect();
}

createAdminUser();
