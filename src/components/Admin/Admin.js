import React, { Component } from 'react';
import { connect } from 'react-redux';

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

            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapReduxStoreToProps)(Admin);