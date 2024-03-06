const generate = require('@babel/generator').default;
module.exports = function ({template}) {
    return {
        visitor: {
            CallExpression(path, state) {
                const calleeName = generate(path.node.callee).code;
                if (calleeName === 'this.setState') {
                    const {line, column} = path.node.loc.start
                    const newNode = template.expression(`console.log("setState at ${line}:${column}: ",${JSON.stringify(path.get('arguments.0').toString(), null, 2)})`)()
                    path.insertBefore(newNode)
                }
            }
        }
    }
}
