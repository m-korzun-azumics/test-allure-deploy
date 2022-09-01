require('ts-node').register(
    {
        transpileOnly: false,
        files: true,
        project: "./tsconfig.json"
    }
)
module.exports = require('./wdio.conf.ts')
module.exports = require('./wdio.selenoid.conf.ts')
module.exports = require('./wdio.grid.conf')