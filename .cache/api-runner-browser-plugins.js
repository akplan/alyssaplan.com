module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-fontawesome-css/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":750,"linkImagesToOriginal":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    }]
