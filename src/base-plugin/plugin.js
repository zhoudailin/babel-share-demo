module.exports = function (api) {
    return {
        visitor: {
            CallExpression(path, state) {
                const objectName = path.node.callee.object?.name
                const propertyName = path.node.callee.property?.name
                if (objectName === 'console' && propertyName === 'log') {
                    path.remove()
                }
            }
        }
    }
}
