# webpack-war-archiver-plugin

## Usage

``` javascript
var WarArchiverPlugin = require("webpack-war-archiver-plugin");

module.exports = {
	plugins: [
		new WarArchiverPlugin({
			fileName: "project-name.war",
			rootFolder: "project-name"
		})
	]
}
```

Arguments:

* `fileName`: Name of the war archive.
* `rootFolder`: Name of the root folder when it will be unarchived.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)