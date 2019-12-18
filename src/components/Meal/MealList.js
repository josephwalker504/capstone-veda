import React, { Component } from 'react';
import MealManager from '../../Modules/MealManager';
import { Link } from "react-router-dom"
import MealSection from './MealSection';





class MealList extends Component {
    state = {
        meals: [],
    }

    componentDidMount() {
        MealManager.getAll()
        .then(mealArray => {
            this.setState({
                meals: mealArray
            })
        })
    }
    deleteMeal = id => {
        MealManager.delete(id)
        .then(() => {
            MealManager.getAll()
            .then((makeNewMeal) => {
                this.setState({
                    meals: makeNewMeal
                })
            })
        })
    }

    render() {
        console.log("this.state",this.state)
        return(
            <>
            <section className="section-content">
                <button type="button" className="btn" 
                onClick={() => {this.group.history.push("/meal/new") }}>
                </button>
              
                <Link to={`/meal/new`}>NEW MEAL</Link>
                
            </section>
            <div className="meal-content">
            <p>{this.state.child}</p>
                {this.state.meals.map(meal =>
                    <MealSection
                    key={meal.id} 
                    meal={meal}
                    deleteMeal={this.deleteMeal}
                    {...this.props}  
                    />
                )}
            </div>
            
            </>
        )
    }
}


export default MealList