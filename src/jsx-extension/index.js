const {transformFileSync} = require('@babel/core')
const ConsolePlugin = require('./plugin')
const {code} = transformFileSync('./ReactCom.js', {
    plugins: [
        ConsolePlugin
    ],
    parserOpts: {
        sourceType: 'unambiguous',
        plugins: [
            'jsx'
        ]
    }
})
