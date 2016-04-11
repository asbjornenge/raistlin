let fs     = require('fs')
let path   = require('path')
let assign = require('object.assign')
let execSh = require('exec-sh')
let utils  = require('../../utils')

module.exports = {
    name : 'init',
    usage : `Usage: ${utils.getCliName()} build [OPTIONS]`,
    options : [
    ],
    command : init 
}

function init(args, cliopts) {
  execSh('npm init .', (err) => {
    let writtenConfig = require(path.resolve('./package.json'))
    let raistlingConfig = require(path.resolve(__dirname, '../../../src/sub-commands/init/raistlin-package.json'))
    let mergedConfig = assign({}, writtenConfig, raistlingConfig)
    fs.writeFileSync('./package.json', JSON.stringify(mergedConfig, null, 2))
  })
}
