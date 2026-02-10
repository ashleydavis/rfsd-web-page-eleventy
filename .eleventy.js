const md = require('markdown-it');
const implicitFigures = require('markdown-it-image-figures');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/preview.jpg');
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/.nojekyll');

    let options = {
        html: true,
        breaks: true,
        linkify: true
    };
    
    const m = md(options);
    m.use(implicitFigures);

    eleventyConfig.setLibrary("md", m);

    // GitHub Pages project site base path (so /chapter-1/ works at ashleydavis.github.io/rfsd-web-page-eleventy/chapter-1/)
    const pathPrefix = "/rfsd-web-page-eleventy";
    eleventyConfig.addGlobalData("pathPrefix", pathPrefix);

    return {
        pathPrefix,
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "docs",
        }
    };
};
