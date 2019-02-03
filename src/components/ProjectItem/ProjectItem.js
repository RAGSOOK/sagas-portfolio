import React, { Component } from 'react';

class ProjectItem extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.project.name}</h3>
                <div className='wholeProject'>
                    <img className='projectImage' src={this.props.project.thumbnail} 
                        alt='Project Screenshot'/>
                    <div>
                        <a href={this.props.project.github}>Github link</a>
                        <a href={this.props.project.website}>Website link</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;