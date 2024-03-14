const { generateToken } = require('../configs/generateToken');
const {
     UserModel,
     LectureModel,
     CourseModel,
     DiscussionModel
} = require('../imports/models.imports')

const { getAllUsers, getSingleUser, getAllLecture, getSingleLecture, getAllCourse, getSingleCourse, createUserController, loginUser, updateUser, createLecture, updateLecture, deleteLecture, createCourseController, updateCourse, deleteCourse } = require('../imports/controller.imports')

const { ApolloError, bcrypt, jwt } = require("../imports/modules.imports");
const { authMiddleware } = require('../middleware/authenticate.middleware');


const resolvers = {
     Query: {
          users: async (_, __, context) => {
               // await authMiddleware("ADMIN")(context);
               return getAllUsers();
          },
          user: async (_, { id }) => {
               return getSingleUser(id)
          },
          lectures: async () => {
               return getAllLecture();
          },
          lecture: async (_, { id }) => {
               return getSingleLecture(id);
          },
          courses: async () => {
               return getAllCourse();
          },
          course: async (_, { id }) => {
               return getSingleCourse();
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
                    console.log(data)
                    return data;
               } catch (error) {
                    throw new Error('Failed to fetch course');
               }
          }
     },
     Mutation: {
          createUser: async (_, { email, password, role, name }) => {

               return createUserController(email, password, role, name)
          },
          loginUser: async (_, { email, password }, context) => {

               return loginUser(email, password)

          },
          updateUser: async (_, { id, ...args }) => {
               return updateUser(id, args)
          },

          createLecture: async (_, args, context) => {
               authMiddleware("ADMIN")(context.user)
               return createLecture(args)
          },
          updateLecture: async (_, { id, ...args }, context) => {
               authMiddleware("ADMIN")(context.user)
               return updateLecture(id, args)
          },
          deleteLecture: async (_, { id }, context) => {
               authMiddleware("ADMIN")(context.user)
               return deleteLecture(id)
          },
          createCourse: async (_, { title, description }, context) => {
               authMiddleware("ADMIN")(context.user)
               return createCourseController({ title, description }, context)
          },
          updateCourse: async (_, { id, ...args }, context) => {
               authMiddleware("ADMIN")(context.user)
               return updateCourse(id, args)
          },
          deleteCourse: async (_, { id }, context) => {
               authMiddleware("ADMIN")(context.user)
               return deleteCourse(id)
          }
     },
};

module.exports = { resolvers };
// assignement