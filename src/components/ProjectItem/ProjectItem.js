import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectItem extends Component{

    //renders the category name of the matching id
    determineCategory(){
        const index = (this.props.project.tag_id - 1);
        console.log(this.props.reduxStore.tags[index].name);
        return <p>{this.props.reduxStore.tags[index].name}</p>
    }

    render(){
        return(
            <div>
                <h3>{this.props.project.name}</h3>
                <div className='wholeProject'>
                    <img className='projectImage' src={this.props.project.thumbnail} 
                        alt='Project Screenshot'/>
                    <div>
                    {this.props.project.github !== null
                        && <a href={this.props.project.github}>Github link</a>}

                    {this.props.project.website !== null
                        && <a href={this.props.project.website}>Website link</a>}

                    {this.props.reduxStore.tags !== []
                        && this.determineCategory() }

                    <br />

                    {this.props.project.description !== null
                        && <p>{this.props.project.description}</p>}

                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });

export default connect(mapReduxStoreToProps)(ProjectItem);