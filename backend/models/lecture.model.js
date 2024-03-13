const { mongoose } = require('../imports/modules.imports')


const lectureSchema = mongoose.Schema({
     title: { type: String, required: true },
     instructor: { type: String, required: true },
     start_time: { type: String, required: true },
     end_time: { type: String, required: true },
     meet_link: { type: String, required: true },
     marks_as_done: { type: Boolean, default: false },
     course: { type: mongoose.Schema.Types.ObjectId, ref: "Courses" }
}, { timestamp: true });

// Create a model based on the schema
const LectureModel = mongoose.model("Lectures", lectureSchema);

// Export the Lecture model
module.exports = LectureModel 