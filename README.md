# font subset loader for webpack

Transforms a font resource so that it contains only a specified subset of glyphs with all other glyphs stripped out.

## Install

`npm install font-subset-loader fontmin --save-dev`

font-subset-loader requires [fontmin](https://github.com/ecomfe/fontmin)
as a [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies). Thus you are able to specify the required version accurately.

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
require("font-subset!./file.ttf?glyphs=abc");
// returns the file content of the subsetted file.ttf that contains only the specified glyphs a, b and c
```

## Usage with other loaders

``` javascript
require("file!font-subset!./file.ttf?glyphs=abc");
require("url!font-subset!./file.ttf?glyphs=abc");
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
