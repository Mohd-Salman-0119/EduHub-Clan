import { gql } from '@apollo/client'
export const GET_ALL_COURSE = gql`
  query GetAllCourses {
    courses {
      _id
      title
      description
    }
  }
`;

export const GET_ALL_LECTURES = gql`
  query GetAllLectures {
    lectures {
      _id
      title
      end_time
      instructor
      marks_as_done
      meet_link
      start_time
    }
  }
`
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
        _id
        email
        name
        password
        role
        course {
          _id
          title
          description
      }
    }
  }
`