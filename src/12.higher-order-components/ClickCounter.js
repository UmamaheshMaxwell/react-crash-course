import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

export class ClickCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h1> Click Counter</h1>
                <button className="btn btn-primary"
                        onClick={incrementCount}
                >Button clicked {count} Times</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter)
