import React, { Component } from 'react';
import ProjectRow from './ProjectRow/ProjectRow.js';

class ProjectTable extends Component{
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProjectRow />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProjectTable;