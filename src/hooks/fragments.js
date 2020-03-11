import { graphql } from "gatsby"

export const SiteMetadataFragment = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      title
      description
      author
      social {
        github
      }
    }
  }
`
