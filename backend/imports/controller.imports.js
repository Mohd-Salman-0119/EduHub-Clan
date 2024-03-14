const { getAllUsers, getSingleUser, createUserController, loginUser, updateUser } = require('../controllers/user.controller')
const { getAllLecture, getSingleLecture, createLecture, updateLecture, deleteLecture } = require('../controllers/lecture.controller')
const { getAllCourse, getSingleCourse, createCourseController, updateCourse, deleteCourse } = require('../controllers/course.controller')

module.exports = {
     getAllUsers,
     getSingleUser,
     createUserController,
     loginUser,
     updateUser,
     getAllLecture, getSingleLecture, createLecture, updateLecture, deleteLecture,
     getAllCourse, getSingleCourse, createCourseController, updateCourse, deleteCourse
}