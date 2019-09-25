const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Server running...'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started...'));
