module.exports = {
    siteMetadata: {
        title: 'Alyssa Plan (dot) com',
        author: 'Alyssa Plan Cserei'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        'gatsby-plugin-sass',
        'gatsby-source-fontawesome',
        'gatsby-plugin-fontawesome-css',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path:`${__dirname}/src`,
                name: 'src'
            }
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        {  
            resolve: "gatsby-plugin-use-dark-mode",
            options: {
            classNameDark: "dark-mode",
            classNameLight: "light-mode",
            storageKey: "darkMode",
            minify: true,
            },
        }
    ]
}