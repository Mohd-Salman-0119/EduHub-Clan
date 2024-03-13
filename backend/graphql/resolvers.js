const {
     UserModel,
     LectureModel,
     CourseModel,
     DiscussionModel
} = require('../imports/models.imports')


const resolvers = {
     Query: {


          users: async () => {
               try {
                    const users = await UserModel.find();
                    return users;
               } catch (error) {
                    throw new Error('Failed to fetch users');
               }
          },
          user: async (_, { id }) => {
               try {
                    const user = await UserModel.findById(id);
                    return user;
               } catch (error) {
                    throw new Error('Failed to fetch user');
               }
          },
          lectures: async () => {
               try {
                    const lectures = await LectureModel.find();
                    return lectures;
               } catch (error) {
                    throw new Error('Failed to fetch lectures');
               }
          },
          lecture: async (_, { id }) => {
               try {
                    const lecture = await LectureModel.findById(id);
                    return lecture;
               } catch (error) {
                    throw new Error('Failed to fetch lecture');
               }
          },
          courses: async () => {
               try {
                    const courses = await CourseModel.find();
                    return courses;
               } catch (error) {
                    throw new Error('Failed to fetch courses');
               }
          },
          course: async (_, { id }) => {
               try {
                    const course = await CourseModel.findById(id);
                    return course;
               } catch (error) {
                    throw new Error('Failed to fetch course');
               }
          }
     },
     User: {
          course: async (c) => {
               try {
                    const promises = c.course.map(async (a) => {
                         const stringId = a.toString();
                         console.log(stringId)
                         const user = await CourseModel.findById({ _id: stringId });
                         return user;
                    });
                    const users = await Promise.all(promises);
                    return users;
               } catch (error) {
                    throw new Error('Failed to fetch user');
               }
          }
     },
     Lecture: {
          course: async (lecture) => {
               try {

                    const stringID = lecture.course.toString()
                    console.log(stringID)
                    const data = await CourseModel.findById({ _id: stringID });
                    // console.log(data)
                    return data;
               } catch (error) {
                    throw new Error('Failed to fetch course');
               }
          }
     },
     Mutation: {
          createUser: async (_, args) => {
               try {
                    const newUser = await UserModel.create(args);

                    return newUser;
               } catch (error) {
                    throw new Error('Failed to create user');
               }
          },
          updateUser: async (_, { id, ...args }) => {
               try {

                    // Find the user by ID
                    const updatedUser = await UserModel.findById(id);
                    console.log(id, args)
                    if (!updatedUser) {
                         throw new Error('User not found');
                    }
                    // Push the course IDs into the courses array

                    updatedUser.course.push(...args.course);

                    // Update the user with other provided arguments
                    const updatedUserData = { ...args };

                    // Perform the update

                    const updatedUserResult = await updatedUser.save()
                    // console.log(updatedUserResult)


                    return updatedUserResult;
               } catch (error) {
                    throw new Error('Failed to update user: ' + error.message);
               }
          },
          createLecture: async (_, args) => {
               try {
                    const newLecture = await LectureModel.create(args);
                    return newLecture;
               } catch (error) {
                    throw new Error('Failed to create lecture');
               }
          },
          updateLecture: async (_, { id, ...args }) => {
               try {
                    const updatedLecture = await LectureModel.findByIdAndUpdate(id, args, { new: true });
                    return updatedLecture;
               } catch (error) {
                    throw new Error('Failed to update lecture');
               }
          },
          deleteLecture: async (_, { id }) => {
               try {
                    await LectureModel.findByIdAndDelete(id);
                    return id;
               } catch (error) {
                    throw new Error('Failed to delete lecture');
               }
          },
          createCourse: async (_, args) => {
               try {
                    const newCourse = await CourseModel.create(args);
                    return newCourse;
               } catch (error) {
                    throw new Error('Failed to create course');
               }
          },
          updateCourse: async (_, { id, ...args }) => {
               try {
                    const updatedCourse = await CourseModel.findByIdAndUpdate(id, args, { new: true });
                    return updatedCourse;
               } catch (error) {
                    throw new Error('Failed to update course');
               }
          },
          deleteCourse: async (_, { id }) => {
               try {
                    await CourseModel.findByIdAndDelete(id);
                    return id;
               } catch (error) {
                    throw new Error('Failed to delete course');
               }
          }
     },
};

module.exports = { resolvers };
// assignement