const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/auth'));
// Include additional routes
app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/plants', require('./routes/plants'));
app.use('/api/gardenevents', require('./routes/gardenEvents'));
app.use('/api/communityposts', require('./routes/communityPosts'));
app.use('/api/products', require('./routes/products'));
app.use('/api/contents', require('./routes/contents'));
app.use('/api/admins', require('./routes/admins'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
