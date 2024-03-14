const { asyncHandler, ApolloError } = require('../imports/modules.imports');
const {
     UserModel,
     LectureModel,
     CourseModel,
     DiscussionModel
} = require('../imports/models.imports')


const getAllLecture = asyncHandler(async () => {
     try {
          const users = await LectureModel.find();
          return users;
     } catch (error) {
          throw new Error('Failed to fetch users');
     }
});

const getSingleLecture = asyncHandler(async (id) => {
     try {
          const users = await LectureModel.findById(id);
          return users;
     } catch (error) {
          throw new Error('Failed to fetch users');
     }
})
const createLecture = asyncHandler(async (args) => {
     try {
          const {} = args;
          const newLecture = await LectureModel.create(args);
          console.log(newLecture)

          return newLecture;
     } catch (error) {
          throw new Error('Failed to create lecture');
     }
})
const updateLecture = asyncHandler(async (id, args) => {
     try {
          const updatedLecture = await LectureModel.findByIdAndUpdate(id, args, { new: true });
          return updatedLecture;
     } catch (error) {
          throw new Error('Failed to update lecture');
     }
})
const deleteLecture = asyncHandler(async (id) => {
     try {
          await LectureModel.findByIdAndDelete(id);
          return id;
     } catch (error) {
          throw new Error('Failed to delete lecture');
     }
})

module.exports = { getAllLecture, getSingleLecture, createLecture, updateLecture, deleteLecture }