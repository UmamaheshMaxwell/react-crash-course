import React, { Component } from 'react'
import UpdateComponent from './UpdateComponent'

export class InputCounter extends Component {
    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <input type="text" className='form-control w-50'
                       onChange={incrementCount}
                />
                <label>InputBox Clicked {count} Times</label>
            </div>
        )
    }
}

export default UpdateComponent(InputCounter)
