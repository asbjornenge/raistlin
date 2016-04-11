#!/usr/bin/env node
'use strict';

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var def = function def(args, opts) {
    if (args.v) return console.log(_utils2.default.getVersion());
    opts.print();
};

require('subcmd')({
    name: _utils2.default.getCliName(),
    usage: 'Usage: ' + _utils2.default.getCliName() + ' [CMD] [OPTIONS]\n\n    CMD(s)\n        start  - Start a development server\n        build  - Build an app directory\n        bundle - Bundle a build directory\n',
    options: [{
        name: 'version',
        abbr: 'v',
        help: 'Print version'
    }],
    command: def,
    commands: [require('./sub-commands/start'), require('./sub-commands/build'), require('./sub-commands/bundle')]
}, {
    autoHelp: true
})(process.argv.slice(2));