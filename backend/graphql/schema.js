
const typeDefs = `#graphql
     type Lecture {
          _id: ID!
          title: String!
          instructor: String!
          meet_link: String!
          marks_as_done: Boolean
          course: Course!
          start_time: String!
          end_time: String!
     }

     type Course {
          _id: ID!
          title: String!
          description: String!
     }
     
     type User {
          _id: ID!
          name: String!
          email: String!
          role: UserRole!
          course: [Course]!
          password: String!
          token: String
     }

     input RegisterInput {
          name: String!
          email: String!
          password: String!
     }
     input LoginInput{
          email: String!
          password: String!
     }

     enum UserRole {
          STUDENT
          ADMIN
     }

     type Query {
          lectures(searchTerm: String, sortField: String, sortOrder: String, offset: Int, limit: Int): [Lecture!]!
          lecture(id: ID!): Lecture
          courses(searchTerm: String, sortField: String, sortOrder: String, offset: Int, limit: Int) :[Course!]!
          course(id: ID!): Course
          users(searchTerm: String, sortField: String, sortOrder: String, offset: Int, limit: Int): [User!]!
          user(id: ID!): User
     }


     
     
     type Mutation {
          createUser(name: String!, email: String!, role: UserRole!, password: String!, course:[String!]!): User
          loginUser(email: String!, password: String!): User

          updateUser(id: ID!, name: String, email: String, age: Int, city: String, role: UserRole, course:[String]): User

          createLecture(title: String!, instructor: String!, meet_link: String!, marks_as_done: Boolean, course: ID!, start_time: String!, end_time:String!): Lecture
          updateLecture(id: ID!, title: String, instructor: String, meet_link: String, marks_as_done: Boolean): Lecture
          deleteLecture(id: ID!): ID
          createCourse(title: String!, description: String!): Course
          updateCourse(id: ID!, title: String, description: String): Course
          deleteCourse(id: ID!): ID

     }
`;

module.exports = { typeDefs };
