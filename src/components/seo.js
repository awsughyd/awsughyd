import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import ogImage from '../images/logo_rounded.png'

function SEO({ description, lang, meta, keywords, title, image = ogImage }) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author,
          siteUrl
        }
      }
    }
  `);

  const metaDescription = description || data.site.siteMetadata.description;
  const metaTitle = title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title
  const metaImage = image.startsWith(`http`) ? image : `${data.site.siteMetadata.siteUrl}${image}`;
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `image`,
          content: metaImage
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: metaImage
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:image`,
          content: metaImage
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default SEO;
