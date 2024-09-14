// createUser.js
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

async function createUser() {
    const email = 'boucha@example.com'; // Change email for the user
    const password = 'bouchaboucha'; // Change password for the user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        email,
        password: hashedPassword,
        isAdmin: false, // Regular user
    });

    await newUser.save();
    console.log('User created');
    mongoose.disconnect();
}

createUser();
