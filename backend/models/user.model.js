const { mongoose } = require('../imports/modules.imports')


const userSchema = mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true, unique: true },
     password: { type: String, required: true },
     role: { type: String, required: true, enum: ["STUDENT", "ADMIN"], default: "STUDENT" },
     token: { type: String },
     course: [{ type: mongoose.Schema.Types.ObjectId, ref: "Courses" }]
}, { timestamp: true });

// Create a model based on the schema
const UserModel = mongoose.model("Users", userSchema);

// Export the Lecture model
module.exports = UserModel 