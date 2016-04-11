let shell = require('shelljs')
let utils = require('../../utils')

module.exports = {
    name : 'init',
    usage : `Usage: ${utils.getCliName()} build [OPTIONS]`,
    options : [
    ],
    command : init 
}

function init(args, cliopts) {
  shell.exec('npm init')
}
