import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { usePosts } from "../hooks/use-posts";
import { Post } from "../components/post";

function IndexPage() {
  const { logoRoundedImage, bgImage } = useStaticQuery(graphql`
    query {
      logoRoundedImage: file(relativePath: { eq: "logo_rounded.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      bgImage: file(relativePath: { eq: "BG.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const posts = usePosts();
  return (
    <Layout headerHidden>
      <SEO
        title="Home"
        keywords={[`aws`, `usergroup`, `hyderabad`, `meetup`]}
      />
      <BackgroundImage
        Tag="section"
        fluid={bgImage.sharp.fluid}
        className="bg-gray-900"
      >
        <div className="max-w-6xl mx-auto bg-gray-900 px-4 py-8 md:bg-transparent">
          <div className="flex justify-center md:justify-start">
            <Img
              className="w-40 h-40"
              fluid={logoRoundedImage.sharp.fluid}
              fadeIn
            />
          </div>
          <div className="my-4 md:my-8 md:w-2/3">
            <p className="text-white text-xs font-light text-center leading-relaxed md:text-left md:text-lg md:font-light">
              <span className="font-medium text-sm md:text-xl">AWSUGHYD</span>{" "}
              is volunteer driven, group of passionate Amazon Web Services (aka{" "}
              <span className="font-medium text-sm md:text-xl">AWS</span>)
              Developers, Architects, Users, Evangelists who meet to share best
              practices, discuss up coming features, pit falls, etc in{" "}
              <span className="font-medium text-sm md:text-xl">Hyderabad</span>.
              AWSUGHYD meets regularly and until now, the meetups were not
              documented. This blog aims to capture our learning and share them.
            </p>
            <p className="hidden text-white text-xs font-light text-center leading-relaxed mt-4 md:block md:mt-6 md:text-left md:text-lg md:font-light">
              Community-based learning is the best way to enhance the concepts
              being taught by connecting with enthusiasts in person, thereby
              sharing first-hand experiences and familiar, accessible examples.
            </p>
            <p className="text-white text-xs font-light text-center leading-relaxed mt-4 md:mt-6 md:text-left md:text-lg md:font-light">
              All skills levels are welcome to help accomplish our motto of
              learning, sharing and networking. Let’s join hands to empower this
              tech community to make it bigger and better!
            </p>
          </div>
        </div>
      </BackgroundImage>
      <section className="bg-white">
        <div className="mx-auto px-4 py-8 pb-16 md:bg-transparent">
          <h1 className="text-center text-2xl font-light">Latest Stories</h1>
          <ul className="flex flex-col flex-wrap md:flex-row justify-center items-center">
            {posts.slice(0, 6).map(post => (
              <Post post={post} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
