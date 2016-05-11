var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: ['./test/test.js'],
  output: {
		path: __dirname + '/_out',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.ttf$/,
				loader: 'file!../index.js?glyphs=abc'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['_out'])
	]
};
