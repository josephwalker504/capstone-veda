import React, { Component } from 'react';




class MealSection extends Component {
    render() {
        return(
            <div className="section">
                <div className="section-body">
                <p>{this.props.meal.child.name}</p>
        <h4 onClick={() =>{this.props.history.push(`/meals/${this.props.meal.id}/edit`)}} className="section-title"><b>{this.props.meal.FoodType}</b></h4>
                </div>
                <div className="time-button">
                <button type="button" className="btn"
                 onClick={() =>{this.props.history.push(`/meals/${this.props.meal.id}/edit`)}}>EDIT</button>
                <button type="button" onClick={() => this.props.deleteMeal(this.props.meal.id)} >Delete</button>
                <h6>time: {this.props.meal.timeStamp}</h6>
                </div>
            </div>
        )
    }
}
export default MealSection