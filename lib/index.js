#!/usr/bin/env node
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var utils = _interopRequire(require("./utils"));

var def = function def(args, opts) {
    if (args.v) {
        return console.log(utils.getVersion());
    }opts.print();
};

require("subcmd")({
    name: utils.getCliName(),
    usage: "Usage: " + utils.getCliName() + " [CMD] [OPTIONS]\n\n    CMD(s)\n        start  - Start a development server\n        build  - Build an app directory\n        bundle - Bundle a build directory\n",
    options: [{
        name: "version",
        abbr: "v",
        help: "Print version"
    }],
    command: def,
    commands: [require("./sub-commands/start"), require("./sub-commands/build"), require("./sub-commands/bundle")]
}, {
    autoHelp: true
})(process.argv.slice(2));