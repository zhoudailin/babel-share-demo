const fs = require('fs')
module.exports = function ({template}) {
    return {
        visitor: {
            JSXElement(path, state) {
                const file = path.hub.file.opts.filename
                fs.renameSync(file, file.replace('.js', '.jsx'))
                path.stop()
            }
        }
    }
}
