const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @desc Register new user
// @route POST /api/auth/register
// @access Public
exports.register = async (req, res) => {
const { name, email, password, role } = req.body;

try {
// Check if user exists
let user = await User.findOne({ email });
if (user) {
return res.status(400).json({ msg: 'User already exists' });
}

// Create new user
user = new User({ name, email, password, role });

// Hash password
const salt = await bcrypt.genSalt(10);
user.password = await bcrypt.hash(password, salt);

await user.save();

// Generate JWT
const payload = {
user: {
id: user.id,
role: user.role
}
};
jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err,
token) => {
if (err) throw err;
res.json({ token });
});
} catch (err) {
console.error(err.message);
res.status(500).send('Server Error');
}
};

// @desc Login user
// @route POST /api/auth/login
// @access Public
exports.login = async (req, res) => {
const { email, password } = req.body;

try {
// Check if user exists
let user = await User.findOne({ email });
if (!user) {
return res.status(400).json({ msg: 'Invalid Credentials' });
}

// Check password
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
return res.status(400).json({ msg: 'Invalid Credentials' });
}

// Generate JWT
const payload = {
user: {

id: user.id,
role: user.role
}
};
jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err,
token) => {
if (err) throw err;
res.json({ token });
});
} catch (err) {
console.error(err.message);
res.status(500).send('Server Error');
}
};