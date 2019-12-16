import React, { Component } from 'react';
// import MealManager from '../../Modules/MealManager';


class MealSection extends Component {
    render() {
        return(
            <div className="section">
                <div className="section-body">
        <h4 onClick={() =>{this.props.history.push(`/meals/${this.props.meal.id}/edit`)}} className="section-title"><b>{this.props.meal.FoodType}</b></h4>
                </div>
                <div className="time-button">
                <button type="button" onClick={() => this.props.deleteMeal(this.props.meals.id)} >Delete</button>
                <h6>time: {this.props.meal.timeStamp}</h6>
                </div>
            </div>
        )
    }
}
export default MealSection