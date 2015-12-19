let shell = require('shelljs')
let utils = require('../utils')

module.exports = {
    name : 'start',
    usage : `Usage: ${utils.getCliName()} start [OPTIONS] name`,
    options : [
        {
            name : 'hot',
            help : 'hot module reloading'
        },
        {
            name : 'stylus',
            help : 'include the stylusify transform env'
        },
        {
            name : 'images',
            help : 'include the imgurify transform env'
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
            abbr : 'p',
            help : 'port to bind (default 8080)'
        },
        {
            name : 'host',
            abbr : 'h',
            help : 'host to bind (default 127.0.0.1)'
        }
    ],
    command : start 
}

function start(args, cliopts) {
    let input   = args._[0] || 'app/app.js'
    let output  = args.out     ? '-o '+args.out                    : '-o build/app.js'
    let hot     = args.hot     ? '-p browserify-hmr'               : ''
    let styl    = args.stylus  ? '-t stylusify'                    : '' 
    let img     = args.images  ? '-t imgurify'                     : '' 
    let watch   = `watchify --poll=100 -v -d ${input} -t babelify ${styl} ${img} ${hot} ${output}`

    let host    = args.h      || '127.0.0.1'
    let port    = args.p      || '8080'
    let folder  = args.static || 'build'
    let _static = `static -a ${host} -p ${port} ${folder}`

    console.log(watch, _static)

    shell.exec(`concurrent -k -p command '${watch}' '${_static}'`)
}
