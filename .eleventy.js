module.exports = function(config) {

  config.addPassthroughCopy("assets")
  config.addPassthroughCopy("favicon.ico")

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      data: "_data"
    }
  }


}