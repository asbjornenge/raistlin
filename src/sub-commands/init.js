let fs     = require('fs')
let path   = require('path')
let shell  = require('shelljs')
let assign = require('object.assign')
let execSh = require('exec-sh')
let utils  = require('../utils')

module.exports = {
    name : 'init',
    usage : `Usage: ${utils.getCliName()} build [OPTIONS]`,
    options : [
    ],
    command : init 
}

function init(args, cliopts) {
  execSh('npm init .', (err) => {
    let initPath = path.resolve(__dirname, '../../raistlin-init-files')
    let writtenConfig = require(path.resolve('./package.json'))
    let raistlingConfig = require(initPath+'/raistlin-package.json')
    let mergedConfig = assign({}, writtenConfig, raistlingConfig)
    fs.writeFileSync('./package.json', JSON.stringify(mergedConfig, null, 2))
    shell.exec(`mkdir app && mkdir .raistlin && mkdir dist`)
    shell.exec(`cp ${initPath+'/app.js'} app/app.js`) 
    shell.exec(`cp ${initPath+'/dom.js'} app/dom.js`) 
    shell.exec(`cp ${initPath+'/.gitignore'} .gitignore`) 
    shell.exec(`cp -R ${initPath+'/../tales-app'} tales`) 
  })
}
