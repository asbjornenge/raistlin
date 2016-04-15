let path     = require('path')
let dargs    = require('dargs')
let shell    = require('shelljs')
let minimist = require('minimist')
let utils    = require('../utils')

module.exports = {
    name : 'start',
    usage : `Usage: ${utils.getCliName()} start [OPTIONS] entrypoint`,
    options : [
        {
            name : 'hot',
            help : 'hot module reloading',
            boolean: true
        },
        {
            name : 'out',
            help : 'output file (default build/app.js)'
        },
        {
            name : 'static',
            help : 'folder with static files (default build)'
        },
        {
            name : 'port',
            help : 'port to bind (default 8080)'
        },
        {
            name : 'host',
            help : 'host to bind (default 127.0.0.1)'
        }
    ],
    command : start 
}

function start(args, cliopts) {
    var bargs = minimist(args._)
    delete bargs._
    args._ = args._.slice(0,1)
    let input   = args._[0]
    if (!input) {
      console.error('No entrypoint specified.')
      process.exit(1)
    }
    let output  = args.out     ? '-o '+args.out                    : '-o '+path.resolve(__dirname, '../../basic-app/build.js')
    let hot     = args.hot     ? '-p browserify-hmr'               : ''
    let bopts   = dargs(bargs).join(' ') // Browserify options 
    let watch   = `watchify --poll=100 -v -d ${input} ${bopts} -t babelify ${hot} ${output}`

    let host    = args.host   || '127.0.0.1'
    let port    = args.port   || '8080'
    let folder  = args.static || path.resolve(__dirname, '../../basic-app')
    let _static = `static -a ${host} -p ${port} ${folder}`

    console.log(watch, _static)

    if (args.hot) {
      shell.env['BABEL_ENV'] = 'hotdevelopment'
    }
    shell.exec(`concurrently -k -p command '${watch}' '${_static}'`)
}
