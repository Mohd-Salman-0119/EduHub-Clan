const { ApolloServer, startStandaloneServer } = require('./imports/modules.imports.js')

// mongoose connection
const { connectDB } = require('./imports/config.imports.js');
const { resolvers, typeDefs } = require('./imports/graphql.imports')


connectDB();

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT;
console.log(PORT)

const { url } = startStandaloneServer(server, {
     listen: {
          port: PORT
     }
});
console.log(`🚀 Server ready at ${url}`);