import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from '../ProjectItem/ProjectItem.js';

class ProjectPage extends Component{

    componentDidMount(){
        this.getProjects();
    }

    getProjects(){
        const action = {type: 'FETCH_PROJECTS'};
        this.props.dispatch(action);
    }

    render(){
        return(
            <div>
                <h3>Cody Troop</h3>

                {this.props.reduxStore.projects !== undefined
                    && 
                    this.props.reduxStore.projects.map((project, index) => 
                        <ProjectItem key={index} project={project}/>)
                }

            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapReduxStoreToProps)(ProjectPage);