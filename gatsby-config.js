module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins     : [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL      : `http://localhost:5000`,
        contentTypes: [
          `article`,
          `user`
        ]
      },
    },
  ],
};