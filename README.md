# font subset loader for webpack

Transforms a font resource so that it contains only a specified subset of glyphs with all other glyphs stripped out.

## Install

`npm install font-subset-loader fontmin --save-dev`

font-subset-loader requires [fontmin](https://github.com/ecomfe/fontmin)
as a [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies). Thus you are able to specify the required version accurately.

[![david](https://david-dm.org/dematerializer/font-subset-loader.svg)](https://david-dm.org/dematerializer/font-subset-loader)

## Usage

[Webpack Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

Glyphs like `!` or `,` conflict with webpack's query string syntax (i.e. `'font-subset?glyphs=hey,you!'`). It is therefore recommended to instead use a query object for passing the glyphs to the loader as a property:

``` javascript
{
	test: /\.ttf$/,
	loader: 'font-subset',
	query: { glyphs: 'abc!' }
}
// returns the file content of the subsetted file.ttf
// that contains only the specified glyphs a, b, c and !
```

## Usage with other loaders

Process subsetted `.ttf` files with file-loader:

``` javascript
loaders: [
	{
		test: /\.ttf$/,
		loader: 'file'
	},
	{
		test: /\.ttf$/,
		loader: 'font-subset',
		query: { glyphs: 'abc!' }
	}
]
```

Process subsetted `.ttf` files with url-loader:

``` javascript
loaders: [
	{
		test: /\.ttf$/,
		loader: 'url'
	},
	{
		test: /\.ttf$/,
		loader: 'font-subset',
		query: { glyphs: 'abc!' }
	}
]
```

## License

MIT
