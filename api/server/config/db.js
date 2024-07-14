const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set('strict', false)
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Ddatabse conected: ${conn.connection.host}`);

    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;