const { jwt, GraphQLError } = require('../imports/modules.imports'); // Import JWT library
const { UserModel } = require('../imports/models.imports'); // Import User model

const authorize = async (req, res) => {
     try {
          let token;

          token = req.header("Authorization")?.replace("Bearer ", "").trim();


          if (!token) {
               throw new Error(`Invalid request: `)
          }
          
          let decodedToken;
          try {
               decodedToken = jwt.verify(token, process.env.PRIVATE_KEY);
          } catch (error) {
               throw new Error(`Error verifying tokens: ${error.message}`)

          }

          const user = await UserModel.findById({ _id: decodedToken?.userID }).select('-password');
          // console.log(user)
          if (!user) {
               throw new Error(`Invalid Access Token...`)

          }
          return user;
     } catch (error) {
          throw new Error(`Error verifying token: ${error.message}`)
     }
};

module.exports = { authorize };
