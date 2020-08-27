import React , { Component } from 'react'
class ClickCount extends Component {

    constructor(props) {
        super(props)
        this.onClickButoon = this.onClickButoon.bind(this)
        this.state = {
            count: 0
        }
    }

    onClickButoon () {
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.onClickButoon}>Click me</button>
                <div>
                    click count: {this.state.count}
                </div>
            </div>
        )
    }
}

export default ClickCount