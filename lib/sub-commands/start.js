"use strict";

var shell = require("shelljs");
var utils = require("../utils");

module.exports = {
    name: "start",
    usage: "Usage: " + utils.getCliName() + " start [OPTIONS] name",
    options: [{
        name: "hot",
        help: "hot module reloading"
    }, {
        name: "stylus",
        help: "include the stylusify transform env"
    }, {
        name: "images",
        help: "include the imgurify transform env"
    }, {
        name: "out",
        help: "output file (default build/app.js)"
    }, {
        name: "static",
        help: "folder with static files (default build)"
    }, {
        name: "port",
        help: "port to bind (default 8080)"
    }, {
        name: "host",
        help: "host to bind (default 127.0.0.1)"
    }],
    command: start
};

function start(args, cliopts) {
    var input = args._[0] || "app/app.js";
    var output = args.out ? "-o " + args.out : "-o build/app.js";
    var hot = args.hot ? "-p browserify-hmr" : "";
    var styl = args.stylus ? "-t stylusify" : "";
    var img = args.images ? "-t imgurify" : "";
    var watch = "watchify --poll=100 -v -d " + input + " -t babelify " + styl + " " + img + " " + hot + " " + output;

    var host = args.host || "127.0.0.1";
    var port = args.port || "8080";
    var folder = args["static"] || "build";
    var _static = "static -a " + host + " -p " + port + " " + folder;

    console.log(watch, _static);

    shell.exec("concurrent -k -p command '" + watch + "' '" + _static + "'");
}