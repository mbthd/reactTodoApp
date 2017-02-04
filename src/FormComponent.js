/**
 * Created by UmairAhmed on 2/5/2017.
 */

//import lib.
import React, { Component } from 'react';
import Input from 'react-toolbox/lib/input';

//component code start here.
export class Form extends Component{
    constructor(props){
        super(props);

        //set initial state.
        this.state = {
            name: ''
        };

        //bind this in method.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //custom methods.
    handleChange(e){
        this.setState({name: e});
    };

    handleSubmit(e){
        e.preventDefault();

        //calling parent method.
        this.props.updateTodo(this.state.name);
        this.setState({name: ''});
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange} required={true} maxLength={16} />
            </form>
        )
    }
}

Form.propTypes = {
    updateTodo: React.PropTypes.func.isRequired
};