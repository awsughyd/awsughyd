import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

export function Header(props) {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);
  return (
    <header className="py-8 pb-4 px-4 flex justify-between items-center mx-auto max-w-6xl">
      <div className="flex">
        <Link to="/">
          <Img className="w-32 h-16" fluid={logo.sharp.fluid} fadeIn />
        </Link>
      </div>
      <button className="flex py-2 px-4 text-lg text-gray-600 hover:text-gray-900">
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="share-alt"
          className="w-6 h-6"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 000-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 00256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"
          />
        </svg>
      </button>
    </header>
  );
}
