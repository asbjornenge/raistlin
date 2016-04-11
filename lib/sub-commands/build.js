'use strict';

var shell = require('shelljs');
var utils = require('../utils');

module.exports = {
    name: 'build',
    usage: 'Usage: ' + utils.getCliName() + ' build [OPTIONS]',
    options: [{
        name: 'stylus',
        help: 'include the stylusify transform env'
    }, {
        name: 'images',
        help: 'include the imgurify transform env'
    }, {
        name: 'out',
        help: 'output file (default build/app.js)'
    }, {
        name: 'appstyle',
        help: 'build app stylesheet'
    }, {
        name: 'appstyle-out',
        help: 'build app stylesheet to this directory'
    }],
    command: start
};

function start(args, cliopts) {
    var input = args._[0] || 'app/app.js';
    var output = args.out ? '-o ' + args.out : '-o build/app.js';
    var styl = args.stylus ? '-t stylusify' : '';
    var resolve = ''; // should add this later
    var img = args.images ? '-t imgurify' : '';
    var buildjs = 'browserify ' + input + ' -t babelify ' + styl + ' ' + img + ' ' + output;
    var buildstyle = 'echo No app stylesheet to build...';
    if (args.appstyle) {
        var buildstyleout = args['appstyle-out'] || 'build';
        buildstyle = 'stylus ' + args.appstyle + ' -o ' + buildstyleout;
    }

    shell.env['BABEL_ENV'] = 'production';
    shell.env['NODE_ENV'] = 'production';
    shell.exec('concurrent -p command \'' + buildjs + '\' \'' + buildstyle + '\'');
}