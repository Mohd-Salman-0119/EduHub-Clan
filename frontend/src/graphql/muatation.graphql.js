import { gql } from '@apollo/client';

export const CREATE_COURSE = gql`
  mutation CreateCourse($title: String!, $description: String!) {
    createCourse(title: $title, description: $description) {
      _id
      title
      description
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
     mutation CreateUser($name: String!, $email: String!, $role: UserRole!, $password: String!) {
          createUser(name: $name, email: $email, role: $role, password: $password) {
               email,
               token
          }
     }
`

export const LOGIN_USER_MUTATION = gql`
     mutation LoginUser($email: String!, $password: String!) {
          loginUser(email: $email, password: $password) {
               email
               token
          }
     }
`