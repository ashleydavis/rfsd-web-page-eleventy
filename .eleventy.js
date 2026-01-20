const md = require('markdown-it');
const implicitFigures = require('markdown-it-image-figures');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/preview.jpg');
    eleventyConfig.addPassthroughCopy('src/assets');

    let options = {
        html: true,
        breaks: true,
        linkify: true
    };
    
    const m = md(options);
    m.use(implicitFigures);

    eleventyConfig.setLibrary("md", m);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "docs",
        }
    };
};
