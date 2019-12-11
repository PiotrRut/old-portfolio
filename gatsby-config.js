module.exports = {
  siteMetadata: {
    title: "Peter Rutkowski - personal website",
    author: "Piotr Rutkowski",
    description: "My personal website",
    url: "https://piotr-rutkowski.com",
    keywords: "piotr rutkowski, piotr, rutkowski, london, city university, piotr rutkowski.com",
    image: "../assets/images/qcCp9QNURpuz15jBSRoKSA_thumb_8f.jpg",
  },
  plugins: [
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // The property ID; the tracking code won't be generated without it
      trackingId: `UA-154333467-1`,
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: false,
      // IP Anonymisation in analytics
      anonymize: true,
    },
  },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            path: `${__dirname}/src/blogposts`,
            name: 'blogposts'
        }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            path: `${__dirname}/src/assets/images`,
            name: 'images'
        }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    'gatsby-plugin-smoothscroll',
  ],
}
