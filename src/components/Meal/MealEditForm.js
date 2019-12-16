import React, { Component } from 'react';
import MealManager from '../../Modules/MealManager';


class MealEditForm extends Component {

    state = {
        meal: [],
        FoodType: "",
        FoodPortion: "",
        Comment: "",
        timeStamp: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    editMeal = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true});
        const editMeal = {
            FoodType: this.props.match.params.meal,
            FoodPortion: this.state.FoodPortion,
            Comment: this.state.Comment,
            timeStamp: this.state.timeStamp
        };
        MealManager.update(editMeal)
            .then(() => this.props.history.push("/meals"))
    }

        componentDidMount() {
            MealManager.get(this.props.match.params.meal)
            .then(meal => {
              this.setState({
               FoodType: meal.FoodType,
               FoodPortion: meal.FoodPortion,
               Comment: meal.Comment,
               timeStamp: new Date(),
              });
            });
        }
    

    render() {
        return(
            <form>
                <fieldset>
                <div className="card">
                    <div className="card-content">
                        <section>
                            <label className="meal-type">Food Type</label>
                            <input type="text" onChange={this.handleFieldChange} id="FoodType"></input>
                            {/* ID's must match state: keys */}
                        </section>

                        <section>
                            <label className="meal-portion">Food Portion</label>
                            <input type="text"onChange={this.handleFieldChange} id="FoodPortion"></input>
                        </section>

                        <section>
                            <label className="meal-comment">Comment</label>
                            <textarea type="text" onChange={this.handleFieldChange} id="Comment" rows="2"></textarea>
                        </section>

                        <div className="meal-btn" id="meal-btn">
                            <button type="button" onClick={this.editMeall} className="meal-button">ENTER</button>
                            <button type="button" onClick={this.deleteMeall} className="meal-button">DELETE</button>
                        </div>

                    </div>

                </div>
             </fieldset>
            </form>

        )
    }
}

export default MealEditForm