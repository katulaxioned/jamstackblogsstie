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
  .use(markdownItContainer, "container-eachpost")

  config.setLibrary("md", markdownLib)

  config.addShortcode('excerpt', article => extractExcerpt(article))

  return {
    passthroughFileCopy: true,
    markdownTemplateEngines: 'njk',
    templateFormats: ['html','njk','md'],
    dir: {
      input: "src"
    }
  }


}

function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn('Failed to extract excerpt: Document has no property "templateContent".');
    return null;
  }
 
  let excerpt = null;
  const content = article.templateContent;
 
  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
    { start: '<p>', end: '</p>' }
  ];
 
  separatorsList.some(separators => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.indexOf(separators.end);
 
    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
      return true; // Exit out of array loop on first match
    }
  });
 
  return excerpt;
}