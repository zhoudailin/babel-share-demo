const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const fs = require('fs')
const sourceCode = fs.readFileSync('./source.js', {encoding: 'utf-8'})
const ast = parser.parse(sourceCode, {
    sourceType: 'unambiguous'
})
traverse(ast, {
    CallExpression(path, state) {
        const objectName = path.node.callee.object?.name
        const propertyName = path.node.callee.property?.name
        if (objectName === 'console' && propertyName === 'log') {
            path.remove()
        }
    }
})
const {code} = generator(ast)
console.log(code)
