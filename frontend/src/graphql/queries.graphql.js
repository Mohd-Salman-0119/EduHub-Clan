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

