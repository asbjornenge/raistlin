"use strict";

var pjson = require("../package.json");

module.exports = {
    getCliName: function () {
        return pjson.name.split("@asbjornenge/")[1];
    },
    getVersion: function () {
        return pjson.version;
    }
};