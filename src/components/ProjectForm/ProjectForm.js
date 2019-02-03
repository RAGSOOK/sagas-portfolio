import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            date: '',
            category: '',
            gurl: '',
            wurl: '',
            description: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const action = {type: 'SEND_PROJECT',
                        payload: this.state};
        this.props.dispatch(action);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='text' placeholder='Project Name' name='name'/>
                <input onChange={this.handleChange} type='date' name='date'/>
                <input onChange={this.handleChange} type='text' placeholder='category' name='category'/>
                <br />
                <input onChange={this.handleChange} type='text' placeholder='Github URL' name='gurl'/>
                <input onChange={this.handleChange} type='text' placeholder='Website' name='wurl'/>
                <br />
                <input onChange={this.handleChange} type='text' placeholder='Description' name='description'/>
                <br />
                <button type='submit' value='Submit'>Submit</button>
            </form>
        );
    }
}

export default connect()(ProjectForm);