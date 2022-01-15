import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux'



//ACTIONS - Describes what you want ( Increnemt, Decrement, Calculate. Subtract)

const increment =() => {
  return {
    type: 'INCREMENT'
  }
}

const decrement =() => {
  return {
    type: 'DECREMENT'
  }
}
const multiply =() => {
  return {
    type: 'MULTIPLY'
  }
}
const divide =() => {
  return {
    type: 'DIVIDE'
  }
}


//REDUCERS - Will call your action and changes your state from old to new 

const counter1=(state=0, action) => {
    switch(action.type){
      case "INCREMENT":
        return state +1
      case "DECREMENT":
        return state -1
      default:
          return state
    }
}

const counter2=(state=20, action) => {
  switch(action.type){
    case "MULTIPLY":
      return state *2
    case "DIVIDE":
      return state /10
      default:
        return state
  }
}

//STORE - Hold all the data of the appliction in globalized state
//let store = createStore(combineReducers({counter1:counter1, counter2:counter2}))
let store = createStore(combineReducers({counter1, counter2}))
console.log(store)
//store.subscribe(() =>console.log(this.getState()))



//Dispatch - dispath all the actions
store.dispatch(increment()) 
console.log(store.getState())
store.dispatch(increment())
console.log(store.getState())
store.dispatch(increment())
console.log(store.getState())
store.dispatch(decrement()) 
console.log(store.getState())
store.dispatch(decrement())
console.log(store.getState())
store.dispatch(multiply())
console.log(store.getState())
store.dispatch(divide())
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
