module.exports = {
    rules: {
        'same-line-block': {
            meta: {
                docs: {
                    description: "大括号不另起新行",
                },
                fixable: "code",
            },
            create(context) {
                const source = context.getSourceCode()
                return {
                    BlockStatement(node) {
                        const token = source.getFirstToken(node)
                        const prevToken = source.getTokenBefore(node)

                        if (token.loc.start.line !== prevToken.loc.start.line) {
                            context.report({
                                node,
                                message: '大括号不另起新行',
                                loc: token.loc,
                                fix(fixer) {
                                    return fixer.replaceTextRange([prevToken.range[1], token.range[0]], ' ')
                                }
                            })
                        }
                    }
                }
            }
        }
    }
}
