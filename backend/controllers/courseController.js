// const Course = require('../models/SelectedCourse');

// exports.getCourses = async (req, res) => {
//     try {
//         const courses = await Course.find();
//         res.status(200).json(courses);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };

// exports.getCourseById = async (req, res) => {
//     const { id } = req.params;
    
//     try {
//         const course = await Course.findById(id);
//         res.status(200).json(course);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error', error });
//     }
// };
const SelectedCourse = require('../models/SelectedCourse');

// Controller to handle course selection
const selectCourse = async (req, res) => {
  const { courseId, courseTitle, userId } = req.body;

  try {
    // Create a new selected course record
    const selectedCourse = new SelectedCourse({
      courseId,
      courseTitle,
      userId,
      
    });

    // Save the record to the database
    await selectedCourse.save();
    res.status(201).json({ message: 'Course selected successfully', data: selectedCourse });
  } catch (error) {
    res.status(500).json({ message: 'Error selecting course', error });
  }
};

module.exports = { selectCourse };
