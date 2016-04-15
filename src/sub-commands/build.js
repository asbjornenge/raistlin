let shell    = require('shelljs')
let dargs    = require('dargs')
let minimist = require('minimist')
let utils    = require('../utils')

module.exports = {
    name : 'build',
    usage : `Usage: ${utils.getCliName()} build [OPTIONS]`,
    options : [
        {
            name : 'out',
            help : 'output file (default build/app.js)'
        }
    ],
    command : build 
}

function validate(args) {
    if (!args._[0]) {
      console.error('No entrypoint specified.')
      process.exit(1)
    }
    if (!args.out) {
      console.error('No --out location specified.')
      process.exit(1)
    }   
}

function build(args, cliopts) {
    validate(args)
    var bargs = minimist(args._)
    delete bargs._
    args._ = args._.slice(0,1)
    let input   = args._[0]
    let output  = '-o '+args.out
    let bopts   = dargs(bargs).join(' ') // Browserify options
    let buildjs = `browserify ${input} -t babelify ${bopts} ${output}`
    shell.env['BABEL_ENV'] = 'production'
    shell.env['NODE_ENV'] = 'production'
    shell.exec(`concurrently -p command '${buildjs}'`)
}
