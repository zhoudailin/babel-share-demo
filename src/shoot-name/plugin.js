module.exports = function ({template}) {
    return {
        visitor: {
            Identifier(path, state) {
                const newName = path.scope.generateUid(path.node.name)
                path.scope.rename(path.node.name,newName)
            }
        }
    }
}
