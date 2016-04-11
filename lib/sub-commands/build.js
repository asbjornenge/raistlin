let shell = require('shelljs');
let utils = require('../utils');

module.exports = {
    name: 'build',
    usage: `Usage: ${ utils.getCliName() } build [OPTIONS]`,
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
    let input = args._[0] || 'app/app.js';
    let output = args.out ? '-o ' + args.out : '-o build/app.js';
    let styl = args.stylus ? '-t stylusify' : '';
    let resolve = ''; // should add this later
    let img = args.images ? '-t imgurify' : '';
    let buildjs = `browserify ${ input } -t babelify ${ styl } ${ img } ${ output }`;
    let buildstyle = 'echo No app stylesheet to build...';
    if (args.appstyle) {
        let buildstyleout = args['appstyle-out'] || 'build';
        buildstyle = `stylus ${ args.appstyle } -o ${ buildstyleout }`;
    }

    shell.env['BABEL_ENV'] = 'production';
    shell.env['NODE_ENV'] = 'production';
    shell.exec(`concurrent -p command '${ buildjs }' '${ buildstyle }'`);
}