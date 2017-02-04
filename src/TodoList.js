/**
 * Created by UmairAhmed on 2/5/2017.
 */

//import lib.
import React, { Component } from 'react';

//component code start here.
export class TodoList extends Component{

    constructor(props) {
        super(props);

        //set initial state.
        this.state = {
            todo: this.props.todo
        };
    }

    //listen props update event.
    componentWillReceiveProps(newProps) {
        this.setState({todo: newProps.todo})
    }

    //custom methods.
    handleChange(index, e) {
        let todo = this.state.todo;
        todo[index].isDone = e.target.checked;
        this.setState({todo});
    };

    render() {
        return(
            <ul>
                {
                    this.state.todo.map( (obj, i) => {
                        return <li key={i} ><input type="checkbox" checked={obj.isDone} onChange={this.handleChange.bind(this, i)} /> {obj.isDone ? <del>{obj.task}</del> : obj.task } </li>
                    })
                }
            </ul>
        )
    }
}

TodoList.propTypes = {
    todo: React.PropTypes.array.isRequired
};