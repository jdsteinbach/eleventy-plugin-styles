module.exports = (eleventyConfig, globalOpts) => {
  globalOpts = globalOpts || {}
  eleventyConfig.namespace(globalOpts, () => {
    // Register `styles.11ty.js`
    // Get globalOpts into `styles.11ty.js`
  })
}
