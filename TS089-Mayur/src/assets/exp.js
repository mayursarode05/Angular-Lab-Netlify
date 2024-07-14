const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = [
    { id: 1, username: 'user1', password: 'password1', city: 'City1' },
    { id: 2, username: 'user2', password: 'password2', city: 'City2' }
];

const JWT_SECRET = 'your_secret_key';

app.post('/api/signup', (req, res) => {
    // Handle signup logic here
    // Example: add user to database or array
    const newUser = req.body;
    users.push(newUser);
    res.status(200).json({ message: 'Signup successful' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // Example: find user in array (you should validate against database)
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ sub: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
