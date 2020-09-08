module.exports = {
    plugins: [
        
        'gatsby-plugin-sass',
        'gatsby-plugin-fontawesome-css',
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