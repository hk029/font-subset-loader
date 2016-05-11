var loaderUtils = require('loader-utils');
var Fontmin = require('fontmin')
module.exports = function (content) {
	console.log(content);
	this.cacheable && this.cacheable();
	var callback = this.async();
	var query = loaderUtils.parseQuery(this.query);
	new Fontmin()
		.src(content)
		.use(Fontmin.glyph({ text: query.glyphs }))
		.run(function (err, files) {
			console.log(files);
			callback(err, files[1].contents);
		});
};
module.exports.raw = true;
