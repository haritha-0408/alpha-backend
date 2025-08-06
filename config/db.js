const mongoose = require('mongoose');

const connectDB = async () => {
try {
const conn = await mongoose.connect('mongodb://localhost:27017/alphaDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
});

console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) {
console.error(`Error: ${error.message}`);
process.exit(1); // Exit if there's a DB connection error
}
};

module.exports = connectDB;