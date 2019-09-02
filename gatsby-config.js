module.exports = {
  siteMetadata: {
    title: `AWS User Group Hyderabad`,
    description: `AWSUGHYD is volunteer driven, group of passionate Amazon Web Services (aka AWS) {Developers, Architects, Users, Evangelists} who meet to {share best practices, discuss up coming features, pit falls, etc} in Hyderabad.`,
    author: `@awsughyd`,
    siteUrl: `https://awsughyd.com`
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#ED8936`,
        // Disable the loading spinner.
        showSpinner: true
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "images"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 786,
              backgroundColor: `#ffffff`
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files"
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          `gatsby-remark-autolink-headers`,
          "gatsby-remark-smartypants"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AWS User Group Hyderabad`,
        short_name: `AWSUGHYD`,
        start_url: `/`,
        background_color: `#ED8936`,
        theme_color: `#ED8936`,
        display: `standalone`,
        icon: `src/images/logo_rounded.svg`
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/index.js`
      }
    },
    `gatsby-plugin-netlify`
  ]
};
