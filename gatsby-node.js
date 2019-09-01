const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const _kebabCase = require("lodash.kebabcase");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `);
  if (errors) {
    errors.forEach(e => console.error(e.toString()));
    return Promise.reject(errors);
  }
  const posts = data.allMarkdownRemark.edges;

  let tags = [];
  posts.forEach(edge => {
    const id = edge.node.id;
    tags = tags.concat(edge.node.frontmatter.tags || []);
    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id
      }
    });
  });
  /**
   * Get all tags
   * Get only unique tags using Set (https://mdn.io/set)
   * Finally convert Set into Array
   */
  //   tags = Array.from(new Set(tags));
  //   tags.forEach(tag => {
  //     const tagPath = `/tags/${_kebabCase(tag)}`;
  //     createPage({
  //       path: tagPath,
  //       component: path.resolve(`src/templates/tag.js`),
  //       context: {
  //         tag
  //       }
  //     });
  //   });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
