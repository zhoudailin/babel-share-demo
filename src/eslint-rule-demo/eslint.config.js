const TestPlugin = require('./rule.js')
module.exports = [
    {
        files: ['source.js'],
        languageOptions: {
            sourceType: 'commonjs',
            ecmaVersion: 'latest'
        },
        plugins: {
            "test": TestPlugin
        },
        rules:{
            "test/same-line-block": "error"
        }
    }
]
