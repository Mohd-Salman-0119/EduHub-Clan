
const { GraphQLError } = require('../imports/modules.imports')
const authMiddleware = (role) => {
     return async (user) => {
          if (!user) {
               throw new Error(`Your are are not authorize.`)

          }
          if (user.role != role) {
               throw new Error(`Unauthorized: User role must be ${role}`)
          }

     }
}

module.exports = { authMiddleware }