const { asyncHandler, ApolloError } = require('../imports/modules.imports');
const {
     UserModel,
     LectureModel,
     CourseModel,
     DiscussionModel
} = require('../imports/models.imports')


const getAllCourse = asyncHandler(async () => {
     try {
          const users = await CourseModel.find();
          return users;
     } catch (error) {
          throw new Error('Failed to fetch users');
     }
});

const getSingleCourse = asyncHandler(async (id) => {
     try {
          const users = await CourseModel.findById(id);
          return users;
     } catch (error) {
          throw new Error('Failed to fetch users');
     }
})

const createCourseController = asyncHandler(async ({ title, description }, context) => {
     try {
          
          const newLecture = await CourseModel.create({ title, description });
          return newLecture;
     } catch (error) {
          throw new Error('Failed to create lecture');
     }
})
const updateCourse = asyncHandler(async (id, args) => {
     try {
          const updatedLecture = await CourseModel.findByIdAndUpdate(id, args, { new: true });
          return updatedLecture;
     } catch (error) {
          throw new Error('Failed to update lecture');
     }
})
const deleteCourse = asyncHandler(async (id) => {
     try {
          await CourseModel.findByIdAndDelete(id);
          return id;
     } catch (error) {
          throw new Error('Failed to delete lecture');
     }
})

module.exports = { getAllCourse, getSingleCourse, createCourseController, updateCourse, deleteCourse }