const a = '123'

function b() {
    const a = '456'
    return () => {
        const a = '777'
        return a
    }
}

