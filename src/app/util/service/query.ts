import { gql } from "graphql-request";

export const getProjects = gql`
  {
    projects {
        title
      bannerPicture {
        url
      }
      bannerMu {
        url
      }
      myRole
      duration
      date
      overview {
        text
      }
      theProblem {
        text
      }
      theSolution {
        text
      }
      persona {
        text
      }
      personaBanner {
        url
      }
      competition {
        url
      }
      competitiveAnalysis {
        text
      }
      design {
        text
        raw
        html
        markdown
      }
      wireframe {
        url
      }
      testing {
        text
      }
      mockups {
        url
      }
      mockupsWeb {
        url
      }
      conclusion {
        text
      }
      problemBanner {
      url
      }
      competition {
        url
      }
      slug
    }
  }
`

export const getSingleProjects = gql`
  query GetProject($slug: String!) {
    projects(where: {slug: $slug}) {
        title
      bannerPicture {
        url
      }
      bannerMu {
        url
      }
      myRole
      duration
      date
      overview {
        text
      }
      theProblem {
        text
      }
      theSolution {
        text
      }
      personaBanner {
        url
      }
      competition {
        url
      }
      competitiveAnalysis {
        text
      }
      design {
        text
        raw
        html
        markdown
      }
      wireframe {
        url
      }
      testing {
        text
      }
      mockups {
        url
      }
      mockupsWeb {
        url
      }
      conclusion {
        text
      }
      problemBanner {
      url
      }
      competition {
        url
      }
      slug
    }
  }
`
