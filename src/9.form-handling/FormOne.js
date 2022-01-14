import React, { Component } from 'react'

export class FormOne extends Component {
    constructor() {
        super()
    
        this.state = {
             username: '',
             comments: '',
             country: '',
             gender: '',
             isAdmin: false
        }

    }

    getFormData =() => {
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isAdmin)
    }


    render() {
        return (
            <div className='container'>
                <h2>User Registration Form</h2>
                <div>
                    <label>Username</label>
                    <input type="text" 
                           className='form-control w-50'
                           value={this.state.username}
                           onChange={(event) => this.setState({username: event.target.value}) }
                    />
                </div>
                <br />
                <div>
                    <label>Comments</label>
                    <textarea className='form-control w-50'
                              value={this.state.comments}
                              onChange={(event) => this.setState({comments: event.target.value}) }
                    ></textarea>
                </div>
                <br />
                <div>
                    <label>Country</label>
                    <select className='form-select w-50'
                            value={this.state.country}
                            onChange={(event) => this.setState({country: event.target.value})}
                    >
                        <option value="">Select</option>
                        <option value="1">Bharat</option>
                        <option value="2">Japan</option>
                        <option value="3">Australia</option>
                    </select>
                </div>
                <br />
                <div>
                    <label>Gender&nbsp;&nbsp;</label>
                    <input type="radio" 
                           className='form-check-input' 
                           name="gender" 
                           value="M"
                           onChange={(event)=> this.setState({gender: event.target.value})}
                    /> Male &nbsp;&nbsp;
                    <input type="radio" 
                           className='form-check-input' 
                           name="gender" 
                           value="F"
                           onChange={(event)=> this.setState({gender: event.target.value})}
                    /> Female &nbsp;&nbsp;
                </div>
                <br />
                <div>
                    <label>IsAdmin</label>&nbsp;&nbsp;
                    <input type="checkbox"
                           className='form-check-input' 
                           value={this.state.isAdmin}
                           onChange={(event) =>  this.setState({isAdmin: !this.state.isAdmin})}
                    />
                </div>
                <br />
                <div>
                    <button type="submit" 
                            className='btn btn-primary'
                            onClick={this.getFormData}
                    >Get Data</button>
                </div>
            </div>
        )
    }
}

export default FormOne
