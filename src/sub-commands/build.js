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
        },
        {
            name : 'appstyle',
            help : 'build app stylesheet'
        },
        {
            name : 'appstyle-out',
            help : 'build app stylesheet to this directory'
        }
    ],
    command : start 
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

function start(args, cliopts) {
    validate(args)
    var bargs = minimist(args._)
    delete bargs._
    args._ = args._.slice(0,1)
    let input   = args._[0]
    let output  = '-o '+args.out
    let bopts   = dargs(bargs).join(' ') // Browserify options
    let buildjs = `browserify ${input} -t babelify ${bopts} ${output}`
    let buildstyle = 'echo No app stylesheet to build...'
    if (args.appstyle) {
        if (!args['appstyle-out']) {
          console.error('No --appstyle-out location specified.')
          process.exit(1)
        }
        let buildstyleout = args['appstyle-out']
        buildstyle = `stylus ${args.appstyle} -o ${buildstyleout}`
    }
    shell.env['BABEL_ENV'] = 'production'
    shell.env['NODE_ENV'] = 'production'
    shell.exec(`concurrently -p command '${buildjs}' '${buildstyle}'`)
}
