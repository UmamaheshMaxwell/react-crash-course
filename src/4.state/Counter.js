import React, { Component } from 'react'

 class Counter extends Component {
     
    constructor(){
         super()

        this.state = {
            count: 0,
            message: "Welcome to state of Counter class"
        }
     }

     addCount(){
        // this.state.count = this.state.count +1
         this.setState({
             count: this.state.count + 1
         }, () => {console.log(this.state.count)})
         
     }

    render() {
        return (
            <div>
               <h2>{this.state.count}</h2> 
               <button className='btn btn-primary'
                        onClick={() => this.addCount()}
               >Add Count</button>
            </div>
        )
    }
}

export default Counter
