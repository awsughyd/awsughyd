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
    frontmatter: { title, date, fromNow, description }
  } = post;
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Post title={title} date={data} fromNow={fromNow} content={html} />
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
      }
    }
  }
`;
