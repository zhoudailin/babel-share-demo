const {transformFileSync} = require('@babel/core')
const ConsolePlugin = require('./plugin')
const {code} = transformFileSync('./FakerComponent.jsx', {
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
console.log(code)
