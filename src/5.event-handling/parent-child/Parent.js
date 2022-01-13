import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor() {
        super()
    
        this.state = {
             parentName: 'Parent'
        }
        this.callParent = this.callParent.bind(this)
    }

    callParent(childName){
        alert(`Calling ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <Child invoke={this.callParent} />
            </div>
        )
    }
}

export default Parent
