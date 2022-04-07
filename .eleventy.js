module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('images');

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "dist",
        }
    };
};
