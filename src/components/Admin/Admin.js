import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectTable from '../ProjectTable/ProjectTable.js';

class Admin extends Component{

    componentDidMount(){
        this.getTags();
    }

    getTags(){
        const action = {type: 'FETCH_TAGS'};
        this.props.dispatch(action);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <Link to="/">Back to Projects</Link>
                <br />
                <h3>Add New Project</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Project Name' />
                    <input type='date'/>
                    <input type='text' placeholder='category' />
                    <br />
                    <input type='text' placeholder='Github URL' />
                    <input type='text' placeholder='Website' />
                    <br />
                    <input type='text' placeholder='Description' />
                    <br />
                    <button type='submit' value='Submit'>Submit</button>
                </form>

                <ProjectTable />


            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapReduxStoreToProps)(Admin);