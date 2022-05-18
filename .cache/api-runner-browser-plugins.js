module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-jss/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-emotion/gatsby-browser.js'),
      options: {"plugins":[],"hoist":false,"sourceMap":false,"autoLabel":false,"labelFormat":"[local]","extractStatic":false,"outputDir":"","importedNames":{"styled":"styled","css":"css","keyframes":"keyframes","injectGlobal":"injectGlobal","merge":"merge"}},
    }]
