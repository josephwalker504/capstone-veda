import React, { Component } from 'react';
import MealManager from '../../Modules/MealManager';
import { Link } from "react-router-dom"
import MealSection from './MealSection';





class MealList extends Component {
    state = {
        meal: [],
    }

    componentDidMount() {
        MealManager.getAll()
        .then((meal) => {
            this.setState({
                meal: meal
            })
        })
    }

    render() {
        return(
            <>
            <section className="section-content">
                <button type="button" className="btn" 
                onClick={() => {this.group.history.push("/meal/new") }}>
                </button>
                <Link to={`/meal/new`}>NEW MEAL</Link>
                
            </section>
            <div className="meal-content">
                {this.state.meal.map(meal =>
                    <MealSection
                    key={meal.id} 
                    meal={meal}
                    {...this.props}  
                    />
                )}
            </div>
            
            </>
        )
    }
}


export default MealList