const { asyncHandler, ApolloError } = require('../imports/modules.imports');
const {
     UserModel,
     LectureModel,
     CourseModel,
     DiscussionModel
} = require('../imports/models.imports')


const getAllLecture = asyncHandler(async (searchTerm, sortField, sortOrder, offset, limit) => {
     try {
          let query = {};
          if (searchTerm) {
               query = { $or: [{ title: { $regex: searchTerm, $options: 'i' } }, { instructor: { $regex: searchTerm, $options: 'i' } }] };
          }
          let sort = {};
          if (sortField && sortOrder) {
               sort[sortField] = sortOrder === 'asc' ? 1 : -1;
          }


          const lectures = await LectureModel.find(query)
               .sort(sort)
               .skip(offset)
               .limit(limit);

          return lectures;
     } catch (error) {
          throw new Error('Failed to fetch Lectures');
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