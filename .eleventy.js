const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')
const markdownItContainer = require('markdown-it-container')

module.exports = function(config) {

  config.addPassthroughCopy("assets")
  config.addPassthroughCopy("favicon.ico")

  let options = {
    html: true,
    breaks: true,
    linkify: true
  }

  let markdownLib = markdownIt(options)
  .use(markdownItAttrs)
  .use(markdownItContainer, "container-main")

  config.setLibrary("md", markdownLib)

  return {
    passthroughFileCopy: true,
    markdownTemplateEngines: 'njk',
    templateFormats: ['html','njk','md'],
    dir: {
      input: "src"
    }
  }


}