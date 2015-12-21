"use strict";

var shell = require("shelljs");
var utils = require("../utils");

module.exports = {
    name: "bundle",
    usage: "Usage: " + utils.getCliName() + " build [OPTIONS]",
    options: [{
        name: "out",
        help: "output file (default dist/app.js)"
    }, {
        name: "css",
        help: "bundle css"
    }, {
        name: "css-out",
        help: "css bundle outout file (default dist/app.css)"
    }],
    command: bundle
};

function bundle(args, cliopts) {
    var input = args._[0] || "build/app.js";
    var output = args.out ? "-o " + args.out : "-o dist/app.js";

    var bundlejs = "uglifyjs --compress --screw-ie8 " + input + " " + output;
    var bundlecss = "echo No css to bundle...";
    var bundlecopy = "cp build/index.html dist/index.html";

    if (args.css) {
        var cssout = args["css-out"] || "dist/app.css";
        bundlecss = "cssnano " + args.css + " " + cssout;
    }

    shell.env.BABEL_ENV = "production";
    shell.env.NODE_ENV = "production";
    shell.exec("concurrent -p command '" + bundlejs + "' '" + bundlecss + "' '" + bundlecopy + "'");
}