import {Component} from 'react'

class FakerComponent extends Component {
    state = {
        a: '123', b: true, c: null
    }

    changeA = () => {
        this.setState({
            a: "456"
        })
    }

    changeBC = () => {
        const Value = 5
        if (Value > 2) {
            this.setState({
                b: '456', c: true
            })
        } else {
            this.setState({
                b: '456', c: false
            })
        }
    }

    changeC = () => {
        this.setState({
            b: '456', c: true
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.changeA}>{this.state.a}</button>
                <button onClick={this.changeBC}>{this.state.b}</button>
                <button onClick={this.changeC}>{this.state.c}</button>
            </div>
        )
    }
}
