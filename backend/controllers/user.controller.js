const { asyncHandler, bcrypt, ApolloError } = require('../imports/modules.imports');
const { generateToken } = require('../imports/config.imports');
const {
     UserModel,
     LectureModel,
     CourseModel,
     DiscussionModel
} = require('../imports/models.imports')


const getAllUsers = asyncHandler(async (searchTerm, sortField, sortOrder, offset, limit) => {
     try {
          let query = {};
          if (searchTerm) {
               query = { $or: [{ title: { $regex: searchTerm, $options: 'i' } }, { description: { $regex: searchTerm, $options: 'i' } }] };
          }
          let sort = {};
          if (sortField && sortOrder) {
               sort[sortField] = sortOrder === 'asc' ? 1 : -1;
          }

          const users = await UserModel.find(query)
               .sort(sort)
               .skip(offset)
               .limit(limit);
          return users;
     } catch (error) {
          throw new Error('Failed to fetch users');
     }
});

const getSingleUser = asyncHandler(async (id) => {
     try {
          const users = await UserModel.findById(id);
          return users;
     } catch (error) {
          throw new Error('Failed to fetch users');
     }
})
const updateUser = asyncHandler(async (id, args) => {
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
})
const createUserController = asyncHandler(async (email, password, role, name, course) => {
     try {
          console.log(email, role)
          const user = await UserModel.findOne({ email })
          if (user) {
               throw new ApolloError("A user is already registered with the email " + email, "USER_ALREADY_EXIST")
          }

          const hashedPassword = await bcrypt.hash(password, 10);

          const newUser = new UserModel({
               email: email.toLowerCase(),
               password: hashedPassword,
               name: name,
               role: role,
               course: course
          })

          // Generate JWT token
          const token = generateToken(newUser._id)


          newUser.token = token

          console.log(newUser)

          await newUser.save()

          return newUser;
     } catch (error) {
          console.error('Failed to create user:', error);
          throw new Error('Failed to create user');
     }
})

const loginUser = asyncHandler(async (email, password) => {
     try {
          const user = await UserModel.findOne({ email });
          if (user && bcrypt.compare(password, user.password)) {
               const token = generateToken(user._id);

               user.token = token;
               return {
                    id: user._id,
                    ...user._doc
               }
          } else {
               throw new ApolloError('Incorrect Password', "INCORRECT_PASSWORD")
          }
     } catch (error) {
          throw new Error('Failed to login');
     }
})



module.exports = { getAllUsers, getSingleUser, createUserController, loginUser, updateUser }