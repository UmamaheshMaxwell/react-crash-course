import React, { Component } from 'react'

export class Api extends Component {
    constructor(){
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => this.setState({todos: data}));
    }
    render() {
        return (
            <div className='container'>
                <h1>My Todos</h1>
                {/* {
                    this.state.todos.map(todo =>{
                    return <ul key={todo.id}>
                            <li>{todo.title}</li>
                            <li>{todo.completed ? "true" : "false"}</li>
                          </ul>
                    })
                } */}
                                {
                    this.state.todos.map(todo =>(
                        <ul key={todo.id}>
                            <li>{todo.title}</li>
                            <li>{todo.completed ? "true" : "false"}</li>
                        </ul>
                    ))
                }

            </div>
        )
    }
}

export default Api
