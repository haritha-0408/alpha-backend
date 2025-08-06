const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware (optional if you're using body data)
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/alphaHubDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected using Mongoose'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Sample Route
app.get('/', (req, res) => {
res.send('Hello Team👋!');
});

// Start the server
app.listen(3030, () => {
console.log('🚀 Server is running on http://localhost:3030');
});