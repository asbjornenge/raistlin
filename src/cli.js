#!/usr/bin/env node
import utils from './utils'

let def = function(args, opts) {
    if (args.v) return console.log(utils.getVersion())
    opts.print()
}

require('subcmd')({
    name : utils.getCliName(),
    usage : `Usage: ${utils.getCliName()} [CMD] [OPTIONS]\n
    CMD(s)
        init   - Init a raistling app 
        start  - Start a development server
        build  - Build an app directory
        bundle - Bundle a build directory
`,
    options : [
        {
            name : 'version',
            abbr : 'v',
            help : 'Print version'
        }
    ],
    command : def,
    commands : [
        require('./sub-commands/init'),
        require('./sub-commands/start'),
        require('./sub-commands/build'),
        require('./sub-commands/bundle')
    ]
},{
    autoHelp : true
})(process.argv.slice(2))

