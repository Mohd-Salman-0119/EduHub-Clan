const { mongoose } = require('../imports/modules.imports')


const discussionSchema = mongoose.Schema({
     body: { type: String, required: true },
     lecture: { type: mongoose.Schema.Types.ObjectId, ref: "Lectures" },
}, { timestamp: true });

// Create a model based on the schema
const DiscussionModel = mongoose.model("Discussion", discussionSchema);

// Export the Lecture model
module.exports =DiscussionModel 