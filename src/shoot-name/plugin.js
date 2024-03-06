module.exports = function ({template}) {
    return {
        visitor: {
            Scopable(path, state) {
                console.log(path.toString(), ' ', path.scope.bindings)
                
            }
        }
    }
}
