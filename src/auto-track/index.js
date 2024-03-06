const {transformFileSync} = require('@babel/core')
const ConsolePlugin = require('./plugin')
const {code} = transformFileSync('./source.js', {
    plugins: [
        ConsolePlugin
    ],
    parserOpts: {
        sourceType: 'unambiguous'
    }
})
console.log(code)
