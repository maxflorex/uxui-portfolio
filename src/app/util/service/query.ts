import { gql } from "graphql-request";

export const getProjects = gql`
  {
    projects {
        id
        title
    }
  }
`