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
     mutation CreateUser($name: String!, $email: String!, $role: UserRole!, $password: String!, $course: [String!]!) {
          createUser(name: $name, email: $email, role: $role, password: $password, course: $course) {
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
export const DELETE_LECTURE_MUTATION = gql`
     mutation DeleteLecture($deleteLectureId: ID!) {
          deleteLecture(id: $deleteLectureId)
     }
`

export const CREATE_LECTURE_MUTATION = gql`
   mutation CreateLecture($title: String!, $instructor: String!, $meetLink: String!, $marksAsDone: Boolean!, $course: ID!, $startTime: String!, $endTime: String!) {
     createLecture(title: $title, instructor: $instructor, meet_link: $meetLink, marks_as_done: $marksAsDone, course: $course, start_time: $startTime, end_time: $endTime) {
          title
     }
}

`