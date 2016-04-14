'use strict';

var pjson = require('../package.json');

module.exports = {
    getCliName: function getCliName() {
        return pjson.name.split('@asbjornenge/')[1];
    },
    getVersion: function getVersion() {
        return pjson.version;
    }
};