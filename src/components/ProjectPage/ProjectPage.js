import React, { Component } from 'react';
import { connect } from 'react-redux';

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

            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapReduxStoreToProps)(ProjectPage);