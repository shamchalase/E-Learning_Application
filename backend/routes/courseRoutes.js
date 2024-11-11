// // // // // const express = require('express');
// // // // // const { getCourses, getCourseById } = require('../controllers/courseController');

// // // // // const router = express.Router();

// // // // // router.get('/', getCourses);
// // // // // router.get('/:id', getCourseById);

// // // // // module.exports = router;

// // // // //routes/courseRoutes.js
// // // // const express = require('express');
// // // // const router = express.Router();

// // // // // Sample course data (replace with actual database fetch in a real application)
// // // // const courses = [
// // // //   {
// // // //     id: 1,
// // // //     title: 'Course 1',
// // // //     description: 'Introduction to Course 1',
// // // //     videos: [
// // // //       { videoId: 1, title: 'Video 1.1', url: '/video/video1.mp4' },
// // // //       { videoId: 2, title: 'Video 1.2', url: '/video/video2.mp4' },
// // // //     ]
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     title: 'Course 2',
// // // //     description: 'Introduction to Course 2',
// // // //     videos: [
// // // //       { videoId: 3, title: 'Video 2.1', url: '/video/video1.mp4' },
// // // //       { videoId: 4, title: 'Video 2.2', url: '/video/video2.mp4' },
// // // //     ]
// // // //   },
// // // // ];

// // // // // Route to fetch a course by its ID
// // // // router.get('/courses/:id', (req, res) => {
// // // //   const courseId = parseInt(req.params.id);
// // // //   const course = courses.find(course => course.id === courseId);

// // // //   if (!course) {
// // // //     return res.status(404).json({ message: 'Course not found' });
// // // //   }

// // // //   res.json(course);
// // // // });

// // // // // Route to handle course completion and quiz start
// // // // router.post('/course-completed', (req, res) => {
// // // //   const { courseId, message } = req.body;

// // // //   // Log or store the course completion message (here we just log it)
// // // //   console.log(`Course ${courseId} completed: ${message}`);

// // // //   // Send a success response
// // // //   res.status(200).json({ message: 'Course completion message received' });
// // // // });

// // // // module.exports = router;
// // // const express = require('express');
// // // const router = express.Router();
// // // //const SelectedCourse = require('../models/SelectedCourse');
// // // const { selectCourse } = require('../controllers/courseController'); 
// // // // Route to save selected course to the database
// // // router.post('/select', async (req, res) => {
// // //   const { courseId, courseTitle, userId } = req.body; // Data sent from frontend

// // //   try {
// // //     const selectedCourse = new selectCourse({
// // //       courseId,
// // //       courseTitle,
// // //       userId,
// // //     });

// // //     await selectedCourse.save();
// // //     res.status(201).json({ message: 'Course selected successfully' });
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Failed to save course selection', error });
// // //   }
// // // });

// // // module.exports = router;
// // const SelectedCourse = require('../models/SelectedCourse');

// // // Controller to handle course selection
// // const selectCourse = async (req, res) => {
// //   const { courseId, courseTitle, userId } = req.body;

// //   try {
// //     // Create a new selected course record
// //     const selectedCourse = new SelectedCourse({
// //       courseId,
// //       courseTitle,
// //       userId,
// //     });

// //     // Save the record to the database
// //     await selectedCourse.save();
// //     res.status(201).json({ message: 'Course selected successfully', data: selectedCourse });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error selecting course', error });
// //   }
// // };

// // module.exports = { selectCourse };
// const SelectedCourse = require('../models/SelectedCourse');

// // Controller to handle course selection
// const selectCourse = async (req, res) => {
//   const { courseId, courseTitle, userId } = req.body;

//   try {
//     // Create a new selected course record
//     const selectedCourse = new SelectedCourse({
//       courseId,
//       courseTitle,
//       userId,
//     });

//     // Save the record to the database
//     await selectedCourse.save();

//     // Respond with success message and the saved course data
//     res.status(201).json({ 
//       message: 'Course selected successfully', 
//       data: selectedCourse 
//     });
//   } catch (error) {
//     // Respond with error message if something goes wrong
//     res.status(500).json({ 
//       message: 'Error selecting course', 
//       error: error.message // Provide a more detailed error message
//     });
//   }
// };

// module.exports = { selectCourse };
const express = require('express');
const router = express.Router();
const { selectCourse } = require('../controllers/courseController');

// Route to save selected course to the database
router.post('/select', selectCourse);

module.exports = router;
