module.exports = (eleventyConfig, globalOpts) => {
  globalOpts = globalOpts || {}
  eleventyConfig.namespace(globalOpts, () => {
    console.log(globalOpts)
    console.log(Object.keys(eleventyConfig))
    eleventyConfig.addTemplateFormats('11ty.js')
    // Register `styles.11ty.js`
    // Get globalOpts into `styles.11ty.js`
  })
}
