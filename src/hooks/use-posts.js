import { graphql, useStaticQuery } from "gatsby";

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { isPublished: { eq: true } } }
      ) {
        edges {
          node {
            id
            timeToRead
            excerpt(truncate: true)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMM, YYYY")
              fromNow: date(fromNow: true)
              title
            }
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.edges.map(({ node }) => node);
};
