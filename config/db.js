const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB successfully');
});

mongoose.connection.on('error', (err) => {
    console.log('MongoDB connection error:', err.message);
});

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected successfully');
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1); // Exit process with failure
//     }
// };


