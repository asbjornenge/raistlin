'use strict';

var fs = require('fs');
var path = require('path');
var shell = require('shelljs');
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
    var initPath = path.resolve(__dirname, '../../../raistlin-init-files');
    var writtenConfig = require(path.resolve('./package.json'));
    var raistlingConfig = require(initPath + '/raistlin-package.json');
    var mergedConfig = assign({}, writtenConfig, raistlingConfig);
    fs.writeFileSync('./package.json', JSON.stringify(mergedConfig, null, 2));
    shell.exec('cp ' + (initPath + '/app.js') + ' app.js');
    shell.exec('cp ' + (initPath + '/dom.js') + ' dom.js');
    shell.exec('cp ' + (initPath + '/tales.js') + ' tales.js');
    shell.exec('cp -R ' + (initPath + '/../tales-app') + ' tales');
  });
}