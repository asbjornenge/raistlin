let shell = require('shelljs')
let utils = require('../utils')

module.exports = {
    name : 'bundle',
    usage : `Usage: ${utils.getCliName()} build [OPTIONS]`,
    options : [
        {
            name : 'out',
            help : 'output file (default dist/app.js)'
        }
    ],
    command : bundle 
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

function bundle(args, cliopts) {
    validate(args)
    let bundlejs   = `uglifyjs --compress --screw-ie8 ${args._[0]} -o ${args.out}`
    shell.env['BABEL_ENV'] = 'production'
    shell.env['NODE_ENV'] = 'production'
    shell.exec(`concurrent -p command '${bundlejs}'`)
}
