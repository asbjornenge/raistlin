let shell = require('shelljs')
let utils = require('../utils')

module.exports = {
    name : 'bundle',
    usage : `Usage: ${utils.getCliName()} build [OPTIONS]`,
    options : [
        {
            name : 'out',
            help : 'output file (default dist/app.js)'
        },
        {
            name : 'css',
            help : 'bundle css'
        },
        {
            name : 'css-out',
            help : 'css bundle outout file (default dist/app.css)'
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
    validate()
    let bundlejs   = `uglifyjs --compress --screw-ie8 ${args._[0]} -o ${args.out}`
    let bundlecss  = 'echo No css to bundle...'

    if (args.css) {
        if (!args['css-out']) {
          console.error('No --css-out location specified.')
          process.exit(1)
        }
        let cssout = args['css-out'] || 'dist/app.css'
        bundlecss = `cssnano ${args.css} ${cssout}`
    }

    shell.env['BABEL_ENV'] = 'production'
    shell.env['NODE_ENV'] = 'production'
    shell.exec(`concurrent -p command '${bundlejs}' '${bundlecss}'`)
}
