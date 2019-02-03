import React, { Component } from 'react';
import ProjectRow from './ProjectRow/ProjectRow.js';
import { connect } from 'react-redux';

class ProjectTable extends Component{

    componentDidMount(){
        this.getProjects();
    }

    getProjects(){
        const action = {type: 'FETCH_PROJECTS'};
        this.props.dispatch(action);
    }
    
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.reduxStore.projects !== undefined
                    && 
                    this.props.reduxStore.projects.map((project, index) => 
                        <ProjectRow key={index} project={project}/>
                        )
                }
                </tbody>
            </table>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapReduxStoreToProps)(ProjectTable);