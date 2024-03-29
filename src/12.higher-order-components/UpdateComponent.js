import React from 'react'

const UpdateComponent =(OriginalComponent) =>{

 return  class NewComponent extends React.Component {

    constructor(){
        super()

        this.state = {
            count: 0
        }
    }

    incrementCount =() =>{
        this.setState({
            count : this.state.count + 1
        })
    }

        render(){
            return <OriginalComponent count={this.state.count} 
                                      incrementCount ={this.incrementCount}
                   />
        }

    }
}

export default UpdateComponent
