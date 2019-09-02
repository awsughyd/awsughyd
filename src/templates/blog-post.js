import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export function Post({ date, fromNow, title, content }) {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="font-light text-left text-base">
          {date} ({fromNow})
        </div>
        <h1 className="text-4xl">{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="markdown py-4"
        />
      </div>
    </section>
  );
}

export default function BlogPost({ data: { markdownRemark: post } }) {
  const {
    frontmatter: { title, date, fromNow, description, ogImage }
  } = post;
  return (
    <Layout>
      <SEO title={title} description={description} image={ogImage.sharp.original.src} />
      <Post title={title} date={date} fromNow={fromNow} content={post.html} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        fromNow: date(fromNow: true)
        title
        description
        ogImage {
          sharp:childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;
