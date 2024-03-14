const { ApolloServer, startStandaloneServer } = require('./imports/modules.imports.js')
const { authorize } = require('./middleware/authorize.middleware.js')
// mongoose connection
const { app } = require('./app.js')
const { connectDB } = require('./imports/config.imports.js');
const { resolvers, typeDefs } = require('./imports/graphql.imports')


// connectDB();

const server = new ApolloServer({
     typeDefs,
     resolvers,
     context: async ({ req, res }) => {
          const user = await authorize(req, res).catch((err) => console.log(err));
          // console.log(user, "From Context")
          return { req, res, user };
     },
});

const PORT = process.env.PORT || 8000

connectDB()
     .then(async () => {
          await server.start();
          server.applyMiddleware({ app });
          app.listen(PORT, () => {
               console.log(
                    `🚀 Server running at http://localhost:${PORT}${server.graphqlPath}`
               );
          });
     })
     .catch((error) => {
          console.log(`DB Connection failed: ${error}`);
     });