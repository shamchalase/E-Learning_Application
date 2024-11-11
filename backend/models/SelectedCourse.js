const mongoose = require('mongoose');

const selectedCourseSchema = new mongoose.Schema({
  courseId: { type: Number, required: true },
  courseTitle: { type: String, required: true },
  userId: { type: String, required: true },
  // Change to the appropriate type if necessary
});

module.exports = mongoose.model('SelectedCourse', selectedCourseSchema);