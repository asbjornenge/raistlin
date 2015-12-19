let pjson = require('../package.json')

module.exports = {
    getCliName : () => pjson.name.split('@asbjornenge/')[1],
    getVersion : () => pjson.version
}
