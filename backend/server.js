// // // const express = require('express');
// // // const dotenv = require('dotenv');
// // // const otpRoutes = require('./routes/otpRoutes');
// // // const cors = require('cors');
// // // const mongoose = require('mongoose');
// // // const bodyParser = require('body-parser');
// // // const quizRoutes = require('./routes/quizRoutes')
// // // const courseRoutes = require('./routes/courseRoutes');

// // // dotenv.config();

// // // // Initialize Express
// // // const app = express();
// // // app.use(cors());
// // // app.use(express.json());
// // // app.use(bodyParser.json());

// // // // MongoDB Connection
// // // mongoose.connect(process.env.MONGODB_URI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // })
// // // .then(() => console.log('Connected to MongoDB'))
// // // .catch((err) => console.log('MongoDB connection error:', err));

// // // // Routes
// // // app.use('/api', otpRoutes);
// // // app.use('/api/quiz',quizRoutes);
// // // app.use('/api/courses', courseRoutes);

// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server is running on http://localhost:${PORT}`);
// // // });
// // const express = require('express');
// // const dotenv = require('dotenv');
// // const otpRoutes = require('./routes/otpRoutes');
// // const cors = require('cors');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const quizRoutes = require('./routes/quizRoutes');
// // const courseRoutes = require('./routes/courseRoutes');

// // dotenv.config();

// // // Initialize Express
// // const app = express();
// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.json());

// // // MongoDB Connection
// // mongoose.connect(process.env.MONGODB_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log('Connected to MongoDB'))
// // .catch((err) => console.log('MongoDB connection error:', err));

// // // Routes
// // app.use('/api', otpRoutes);
// // app.use('/api/quiz', quizRoutes);
// // app.use('/api/courses', courseRoutes);

// // // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on http://localhost:${PORT}`);
// // });
// const express = require('express')
// const dotenv = require('dotenv')
// const otpRoutes = require('./routes/otpRoutes')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// //const quizRoutes = require('./routes/quizRoutes');
// const courseRoutes = require('./routes/courseRoutes')
// const quizScoreRoutes = require('./routes/quizScoreRoutes') // Import new route

// dotenv.config()

// // Initialize Express
// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use(bodyParser.json())

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('MongoDB connection error:', err))

// // Routes
// app.use('/api', otpRoutes)
// //app.use('/api/quiz', quizRoutes);
// app.use('/api/courses', courseRoutes)
// app.use('/api', quizScoreRoutes) // Use new route

// // Start the server
// const PORT = process.env.PORT || 5000
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`)
// })
const express = require('express');
const dotenv = require('dotenv');
const otpRoutes = require('./routes/otpRoutes');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const quizRoutes = require('./routes/quizRoutes');
const courseRoutes = require('./routes/courseRoutes');
const quizScoreRoutes = require('./routes/quizScoreRoutes'); 


dotenv.config();

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api', otpRoutes);
// app.use('/api/quiz', quizRoutes); 
app.use('/api/courses', courseRoutes);
app.use('/api', quizScoreRoutes); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
