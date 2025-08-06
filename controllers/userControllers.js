const User = require('../models/User');

// Controller function to handle user creation
const addUser = async (req, res) => {
try {
const { name, email } = req.body;

const newUser = new User({ name, email });
await newUser.save();

res.status(201).json({ message: 'User saved', user: newUser });
} catch (error) {
res.status(500).json({ error: error.message });
}
};

module.exports = { addUser };