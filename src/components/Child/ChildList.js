import React, { Component } from 'react';
import { Link } from "react-router-dom"
import ChildSection from './ChildSection';
import ChildManager from '../../Modules/ChildManager';

 

class ChildList extends Component {

    state = {
        children: []
    }
    componentDidMount() {
        const storedId = localStorage.getItem("credentials");
        ChildManager.childUser(storedId)
        .then(childArray => {
            this.setState({
                children: childArray
            })
        })
    }

    deleteChild = id => {
        const storedId = localStorage.getItem("credentials");
        ChildManager.delete(id)
        .then(() => {
            ChildManager.childUser(storedId)
            .then((makeChild) => {
                this.setState({
                    children: makeChild
                })
            })
        })
    }


    render() {
        return(
            <>
                <div className="list">
                    <Link to={`child/new`}>New Child</Link>
                </div>
                <div className="child-name">
            <p>{this.state.name}</p>
                {this.state.children.map(child =>
                    <ChildSection
                    key={child.id} 
                    child={child}
                    deleteChild={this.deleteChild}
                    {...this.props}  
                    />
                )}
                </div>
            </>
        )
    }
}

export default ChildList