const { mongoose } = require('../imports/modules.imports')

const courseSchema = mongoose.Schema({
     title: { type: String, required: true },
     description: { type: String, required: true },
}, { timestamp: true });

// Create a model based on the schema
const CourseModel = mongoose.model("Courses", courseSchema);

// Export the Lecture model
module.exports = CourseModel 