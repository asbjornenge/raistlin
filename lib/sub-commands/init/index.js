'use strict';

var fs = require('fs');
var path = require('path');
var assign = require('object.assign');
var execSh = require('exec-sh');
var utils = require('../../utils');

module.exports = {
  name: 'init',
  usage: 'Usage: ' + utils.getCliName() + ' build [OPTIONS]',
  options: [],
  command: init
};

function init(args, cliopts) {
  execSh('npm init .', function (err) {
    var writtenConfig = require(path.resolve('./package.json'));
    var raistlingConfig = require(path.resolve(__dirname, '../../../src/sub-commands/init/raistlin-package.json'));
    var mergedConfig = assign({}, writtenConfig, raistlingConfig);
    fs.writeFileSync('./package.json', JSON.stringify(mergedConfig, null, 2));
  });
}