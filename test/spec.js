var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var opentype = require('opentype.js');
var expect = require('chai').expect;

var test = (fontName, glyphs, expectedGlyphs = glyphs) => {
	it(
		'should subset ' +
			fontName +
			' to contain only the glyphs (' +
			expectedGlyphs +
			')',
		done => {
			webpackConfig.entry = ['./' + fontName + '.js'];
			webpackConfig.module.rules = [
				{
					test: /\.ttf$/,
					use: [
						{
							loader: 'file-loader?name=[name].[ext]'
						},
                        { 
                            loader: '../index.js', 
                            options: { 
                               glyphs: glyphs 
                            } 
                        }
					]
				}
			];
			var compiler = webpack(webpackConfig);
			compiler.plugin('done', () => {
				opentype.load(__dirname + '/.out/' + fontName + '.ttf', (err, font) => {
					if (err) throw err;
					var str = '';
					Object.keys(font.glyphs.glyphs).forEach(code => {
						font.glyphs.glyphs[code].unicodes.forEach(unicode => {
							str += String.fromCharCode(unicode);
						});
					});
					expectedGlyphs = expectedGlyphs
						.split('')
						.sort()
						.join('');
					str = str
						.split('')
						.sort()
						.join('');
					expect(str).to.equal(expectedGlyphs);
					done();
				});
			});
			compiler.run((err, stats) => {
				if (err) throw err;
			});
		}
	);
};

describe('font subset loader', () => {
	test('Roboto-Regular', 'abc');
	test('Roboto-Regular', 'def');
	test('Roboto-Regular', 'abbccc', 'abc');
	test('Roboto-Regular', '!');
	test('Roboto-Regular', ',');
});
