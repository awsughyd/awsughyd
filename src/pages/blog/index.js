import React from "react";

import Layout from "../../components/layout";
import { usePosts } from "../../hooks/use-posts";
import { Post } from "../../components/post";
import SEO from "../../components/seo";
import { Header } from "../../components/header";

export default function BlogPosts(props) {
  const posts = usePosts();
  return (
    <Layout>
      <SEO
        title="Blog"
        keywords={[
          `aws`,
          `usergroup`,
          `hyderabad`,
          `blog`,
          `Stories`,
          `updates`
        ]}
      />
      <section className="bg-white min-h-screen">
        <div className="mx-auto px-4 pb-16 md:bg-transparent">
          <h1 className="text-center text-2xl md:font-light md:text-4xl">
            Our Blog
          </h1>
          <ul className="flex flex-col flex-wrap md:flex-row justify-center items-center">
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
