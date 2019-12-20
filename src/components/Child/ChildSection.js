import React, { Component } from 'react';


class ChildSection extends Component {

   render() { 
       return(
           <div className="child-section">
               <div>
               <p>{this.props.name}</p>
               <h4 onClick={() =>{this.props.history.push(`/children/${this.props.child.id}/edit`)}} className="section-title"><b>{this.props.child.name}</b></h4>
               <button type="button" className="btn"
                 onClick={() =>{this.props.history.push(`/children/${this.props.child.id}/edit`)}}>EDIT</button>
                  <button type="button" onClick={() => this.props.deleteChild(this.props.child.id)} >Delete</button>
               </div>
           </div>
       )
   }

} 

export default ChildSection