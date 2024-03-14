const { asyncHandler, ApolloError } = require('../imports/modules.imports');
const {
     UserModel,
     LectureModel,
     CourseModel,
     DiscussionModel
} = require('../imports/models.imports')


const getAllCourse = asyncHandler(async (searchTerm, sortField, sortOrder, offset, limit) => {
     try {
          let query = {};
          if (searchTerm) {
               query = { $or: [{ title: { $regex: searchTerm, $options: 'i' } }, { description: { $regex: searchTerm, $options: 'i' } }] };
          }
          let sort = {};
          if (sortField && sortOrder) {
               sort[sortField] = sortOrder === 'asc' ? 1 : -1;
          }

          const courses = await CourseModel.find(query)
               .sort(sort)
               .skip(offset)
               .limit(limit);;
          return courses;
     } catch (error) {
          throw new Error('Failed to fetch courses');
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