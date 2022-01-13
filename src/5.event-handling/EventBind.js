import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(){
        super()

        this.state = {
            message: 'Hello'
        }

          {/* 3rd Approach */}
        //  this.changeMessage = this.changeMessage.bind(this)
    }

   
    changeMessage = (name, city) => {
        console.log(name, city)
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }

    // changeMessage (name, city)  {
    //     console.log(name, city)
    //     console.log(this)
    //     this.setState({
    //         message: 'Thank you'
    //     })
    // }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* 1st Approach */}
                {/* <button className="btn-primary" 
                        onClick={this.changeMessage.bind(this, "Scott", "Desatnick")}
                >
                Click Me</button> */}

                {/* 2nd Approach */}
                <button className="btn-primary" 
                        onClick={() =>this.changeMessage("Uma", "mahesh")}
                >
                Click Me</button>
                {/* 3rd Approach */}
                {/* <button className="btn-primary" 
                        onClick={this.changeMessage}
                >
                Click Me</button> */}
                {/* 4th Approach */}
                {/* <button className="btn-primary" 
                        onClick={this.changeMessage}
                >
                Click Me</button>                 */}
            </div>
        )
    }
}

export default EventBind
