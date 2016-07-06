var EasyZip = require('easy-zip').EasyZip;
var path = require('path');

function WarArchiverPlugin(options) {
    this.options = options || {};
    this.fileName = options.fileName || 'project.zip';
    this.rootFolder = options.dir || 'project';
}

WarArchiverPlugin.prototype.apply = function(compiler) {
    var self = this;
    var options = compiler.options;
    compiler.plugin('done', function() {
        var zip = new EasyZip();
        zip.zipFolder(options.output.path, function() {
            zip.writeToFile(path.join(options.output.path, '..', self.fileName));
        }, {
            rootFolder: self.rootFolder
        });
    });
};

module.exports = WarArchiverPlugin;