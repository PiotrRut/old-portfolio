module.exports = {
  siteMetadata: {
    title: "Peter Rutkowski - personal website",
    description: "My personal website"
  },
  plugins: [
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
      resolve: 'gatsby-remark-prismjs',
      options: {
        classPrefix: "language-",
        noInlineHighlight: false,
        languageExtensions: [
              {
                language: "superscript",
                extend: "javascript",
                definition: {
                  superscript_types: /(SuperType)/,
                },
                insertBefore: {
                  function: {
                    superscript_keywords: /(superif|superelse)/,
                  },
                },
              },
            ],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-smoothscroll'
  ],
}
