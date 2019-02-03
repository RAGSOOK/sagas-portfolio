import React, { Component } from 'react';

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
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('Submitted');
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Project Name' name='name'/>
                <input type='date' name='date'/>
                <input type='text' placeholder='category' name='category'/>
                <br />
                <input type='text' placeholder='Github URL' name='gurl'/>
                <input type='text' placeholder='Website' name='wurl'/>
                <br />
                <input type='text' placeholder='Description' name='description'/>
                <br />
                <button type='submit' value='Submit'>Submit</button>
            </form>
        );
    }
}

export default ProjectForm;