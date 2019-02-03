import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectTable from '../ProjectTable/ProjectTable.js';
import ProjectForm from '../ProjectForm/ProjectForm.js';

class Admin extends Component{

    componentDidMount(){
        this.getTags();
    }

    getTags(){
        const action = {type: 'FETCH_TAGS'};
        this.props.dispatch(action);
    }

    render(){
        return(
            <div>
                <Link to="/">Back to Projects</Link>
                <br />
                <h3>Add New Project</h3>

                <ProjectForm />

                <ProjectTable />


            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapReduxStoreToProps)(Admin);