import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectTable from '../ProjectTable/ProjectTable.js';
import ProjectForm from '../ProjectForm/ProjectForm.js';

class Admin extends Component{

    render(){
        return(
            <div>
                <Link to="/">Back to Projects</Link>
                <br />
                <h3>Add New Project</h3>

                <ProjectForm />

                <h3>Projects</h3>
                <ProjectTable />

            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapReduxStoreToProps)(Admin);