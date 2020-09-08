module.exports = {
    siteMetadata: {
        title: 'Alyssa Plan (dot) com',
        author: 'Alyssa Plan'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-fontawesome-css',
        'gatsby-transformer-remark',
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