var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	context: __dirname,
	entry: [],
	output: {
		path: __dirname + '/.out',
		filename: 'bundle.js'
	},
	module: {},
	plugins: [new CleanWebpackPlugin([__dirname + '/.out'], { verbose: false })]
};
