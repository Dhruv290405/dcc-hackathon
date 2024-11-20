// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const userRoutes = require('./routes/userRoutes');

// // Middleware to parse JSON
// app.use(express.json());

// // Connect to MongoDB (update with your MongoDB connection string)
// mongoose.connect('your_connection_string',{})
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB...', err));

// // Use user routes
// app.use('/api/users', userRoutes);

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
//     require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('Could not connect to MongoDB:', err));
// });

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure .env is properly loaded

const userRoutes = require('./backend/routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
mongoose.connect("mongodb+srv://dhruvtiwari864:gggtlOMEXTixwqLO@dcc.zb4ct.mongodb.net/?retryWrites=true&w=majority&appName=dcc")
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

// Use user routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5500');
});