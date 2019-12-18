import React, { Component } from 'react';



class PottySection extends Component {
    state = {
        action1: false,
        action2: false
    };
    handleFieldChange =evt => {
        const stateToChange = {}

    }
    
    
    
    
    render() {
        return(
            <div className="potty-section">
                <div className="section-body">
                    <input type="checkbox" onChange={this.handleFieldChange} onClick={() => {}}
                    <h2>{this.props.potty.comment}</h2>
                    <button type="button" className="btn" onClick={() =>{this.props.history.push(`/pottys/${this.props.potty.id}/edit`)}}>EDIT</button>
                    <button type="button" onClick={() => this.props.deletePotty(this.props.potty.id)} >Delete</button>
                    <h6>time: {this.props.potty.timeStamp}</h6>
                </div>
            </div>
        )
    }
}

export default PottySection