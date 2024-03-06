module.exports = function ({template}) {
    return {
        visitor: {
            'FunctionDeclaration|ClassMethod|ArrowFunctionExpression'(path, state) {
                const leadingComments = path.node.leadingComments
                if (!leadingComments) {
                    return
                }
                let hasTrack = false
                for (const leadingComment of leadingComments) {
                    if (leadingComment.value.includes('@track')) {
                        hasTrack = true
                        break;
                    }
                }
                if (leadingComments.length > 0 && hasTrack) {
                    const newNode = template.expression(`cmbTrack.trace()`)()
                    path.node.body.body.unshift(newNode)
                }
            }
        }
    }
}
