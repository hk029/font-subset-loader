# font subset loader for webpack

Transforms a TTF font resource so that it contains only a specified subset of glyphs with all other glyphs stripped out.

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
    use: [{
        loader: 'font-subset',
        options: { 
	        query: { 
                glyphs: 'hey,you!' 
            }
        }
    }]
}
// returns the file content of the subsetted file.ttf
// that contains only the specified glyphs 'h', 'e', 'y', ',', 'o', 'u' and '!'
```

## Usage with other loaders

Process subsetted `.ttf` files with file-loader:

``` javascript
rules: [
	{
        test: /\.ttf$/,
        use: [
            {
		        loader: 'file-loader'
            },
            {
                loader: 'font-subset',
                options: { 
                    query: { 
                        glyphs: 'hey,you!' 
                    }
                }
            }
        ]
	},
]
```

Process subsetted `.ttf` files with url-loader:

``` javascript
rules: [
	{
        test: /\.ttf$/,
        use: [
            {
		        loader: 'url-loader'
            },
            {
                loader: 'font-subset',
                options: { 
                    query: { 
                        glyphs: 'hey,you!' 
                    }
                }
            }
        ]
	},
]
```

## License

MIT
