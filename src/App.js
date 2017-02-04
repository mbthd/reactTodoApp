import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

//import component here.
import {Form} from './FormComponent';
import {TodoList} from './TodoList.js';

//import other files here.
import logo from './logo.svg';
import './App.css';

//parent component.
export class App extends Component {

  constructor(props){
    super(props);

    //set initial state.
    this.state = {
      name: '',
      todo: [{task: 'uni', isDone: true}, {task: 'office', isDone: false}, {task: 'cooking', isDone: true}]
    };

    //bind this in method.
    this.updateTodo = this.updateTodo.bind(this);
  }

  //custom methods.
  updateTodo(text){
    this.setState({ todo: [ {task: text, isDone: false}, ...this.state.todo ] });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo App</h2>
          <Button raised primary label="Hello World!" />,
        </div>
        <div className="Container">
          <Form updateTodo={this.updateTodo} />
          <TodoList todo={this.state.todo} />
        </div>
      </div>
    );
  }

}
