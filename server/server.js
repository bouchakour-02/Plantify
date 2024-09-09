const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const plantRoutes = require('./routes/plants');
const communityRoutes = require('./routes/community');
const authRoutes = require('./routes/auth');
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/auth', authRoutes);
app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/plants', require('./routes/plants'));
app.use('/community', communityRoutes);

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
