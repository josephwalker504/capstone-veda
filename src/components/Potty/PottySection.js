import React, { Component } from 'react';



class PottySection extends Component {
   
    
     
    render() {
        return(
            <div className="potty-section">
                <div className="section-body">
        {/* <p className="action1">{this.props.child.name}</p> */}
                    <h2>{this.props.potty.comment}</h2>
                    <button type="button" className="btn" onClick={() =>{this.props.history.push(`/pottys/${this.props.potty.id}/edit`)}}>EDIT</button>
                    <button type="button" className="btn" onClick={() => this.props.deletePotty(this.props.potty.id)} >Delete</button>
                    <h6>time: {this.props.potty.timeStamp}</h6>
                </div>
            </div>
        )
    }
}

export default PottySection