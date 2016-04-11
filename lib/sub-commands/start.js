let path = require('path');
let shell = require('shelljs');
let utils = require('../utils');

module.exports = {
    name: 'start',
    usage: `Usage: ${ utils.getCliName() } start [OPTIONS] name`,
    options: [{
        name: 'hot',
        help: 'hot module reloading'
    }, {
        name: 'stylus',
        help: 'include the stylusify transform env'
    }, {
        name: 'images',
        help: 'include the imgurify transform env'
    }, {
        name: 'tales',
        help: 'run with tales',
        boolean: true
    }, {
        name: 'out',
        help: 'output file (default build/app.js)'
    }, {
        name: 'static',
        help: 'folder with static files (default build)'
    }, {
        name: 'port',
        help: 'port to bind (default 8080)'
    }, {
        name: 'host',
        help: 'host to bind (default 127.0.0.1)'
    }],
    command: start
};

function start(args, cliopts) {
    let input = args._[0] || 'app/app.js';
    let output = args.out ? '-o ' + args.out : '-o build/app.js';
    let hot = args.hot ? '-p browserify-hmr' : '';
    let styl = args.stylus ? '-t stylusify' : '';
    let img = args.images ? '-t imgurify' : '';
    if (args.tales) {
        var talesPath = path.resolve(input);
        console.log('talesPath', talesPath);
        input = path.resolve(__dirname, '../tales/app.js');
        output = '-o ' + path.resolve(__dirname, '../tales/build.js');
    }
    let watch = `watchify --poll=100 -v -d ${ input } -t babelify ${ styl } ${ img } ${ hot } ${ output }`;

    let host = args.host || '127.0.0.1';
    let port = args.port || '8080';
    let folder = args.static || 'build';
    if (args.tales) folder = path.resolve(__dirname, '../tales');
    let _static = `static -a ${ host } -p ${ port } ${ folder }`;

    console.log(watch, _static);

    shell.exec(`concurrently -k -p command '${ watch }' '${ _static }'`);
}