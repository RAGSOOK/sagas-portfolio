import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectRow extends Component{
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        const action = {type: 'DELETE_PROJECT', 
                        payload: this.props.project.id}
        this.props.dispatch(action);
    }

    render(){
        return(
            <tr>
                <td>{this.props.project.name}</td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
        );
    }
}

export default connect()(ProjectRow);