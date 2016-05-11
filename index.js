var loaderUtils = require('loader-utils');
var Fontmin = require('fontmin')
module.exports = function (content) {
	this.cacheable && this.cacheable();
	var callback = this.async();
	var query = loaderUtils.parseQuery(this.query);
	new Fontmin()
		.src(content)
		.use(Fontmin.glyph({ text: query.glyphs }))
		.run(function (err, files) {
			callback(err, files[0].contents);
		});
};
module.exports.raw = true;
