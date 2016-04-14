let path  = require('path')
let shell = require('shelljs')
let utils = require('../utils')

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
            name : 'stylus',
            help : 'include the stylusify transform env',
            boolean: true
        },
        {
            name : 'images',
            help : 'include the imgurify transform env',
            boolean: true
        },
        {
            name : 'tales',
            help : 'run with tales',
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
    let input   = args._[0]
    if (!input) {
      console.error('No entrypoint specified.')
      process.exit(1)
    }
    let output  = args.out     ? '-o '+args.out                    : '-o '+path.resolve(__dirname, '../../basic-app/build.js')
    let hot     = args.hot     ? '-p browserify-hmr'               : ''
    let styl    = args.stylus  ? '-t stylusify'                    : '' 
    let img     = args.images  ? '-t imgurify'                     : '' 
    if (args.tales) {
      shell.exec(`ln -sf ${path.resolve(input)} ${path.resolve(__dirname, '../../tales-app/tales.js')}`)
      input = path.resolve(__dirname, '../../tales-app/app.js')
      output = '-o '+path.resolve(__dirname, '../../tales-app/build.js')
    }
    let watch   = `watchify --poll=100 -v -d ${input} -t babelify ${styl} ${img} ${hot} ${output}`

    let host    = args.host   || '127.0.0.1'
    let port    = args.port   || '8080'
    let folder  = args.static || path.resolve(__dirname, '../../basic-app')
    if (args.tales)
      folder = path.resolve(__dirname, '../../tales-app')
    let _static = `static -a ${host} -p ${port} ${folder}`

    console.log(watch, _static)

    shell.exec(`concurrently -k -p command '${watch}' '${_static}'`)
}
