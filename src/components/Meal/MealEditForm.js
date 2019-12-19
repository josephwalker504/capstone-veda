import React, { Component } from "react";
import MealManager from "../../Modules/MealManager";

class MealEditForm extends Component {
  state = {
    FoodType: "",
    FoodPortion: "",
    Comment: "",
    timeStamp: "",
    loadingStatus: true,
    children: [],
    childId: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  editMeal = evt => {
    const storedId = localStorage.getItem("currentUser");
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editMeal = {
      id: this.props.match.params.mealId,
      FoodType: this.state.FoodType,
      FoodPortion: this.state.FoodPortion,
      Comment: this.state.Comment,
      timeStamp: this.state.timeStamp,
      userId: parseInt(storedId),
      childId: parseInt(this.state.childId)
    };
    MealManager.update(editMeal).then(() => this.props.history.push("/meals"));
  };

  componentDidMount() {
    MealManager.get(this.props.match.params.mealId).then(meal => {
      console.log("meal", meal);
      this.setState({
        FoodType: meal.FoodType,
        FoodPortion: meal.FoodPortion,
        Comment: meal.Comment,
        timeStamp: new Date(),
        loadingStatus: false,
        childId: `${meal.child.id}`
      });
    });
    const storedId = localStorage.getItem("currentUser");
    MealManager.childMeal(storedId).then(childArray => {
      console.log("componentDidMount", childArray);
      this.setState({
       children: childArray
      });
     });
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
    console.log("this.state", this.state)
    return (
      <form>
        <fieldset>
          <div className="card">
            <div className="card-content">
            <select onChange={this.handleFieldChange} id="childId" value={this.state.childId}>
                <option>Select Child</option>
                {this.state.children.map(child =>
                    <option key={child.id} id={child.id} value={child.id}>{child.name}</option>
                  )}
            </select>
         
              <section>
                <label className="meal-type">Food Type</label>
                <input
                  type="text"
                  onChange={this.handleFieldChange}
                  id="FoodType"
                  value={this.state.FoodType}
                ></input>
              </section>

              <section>
                <label className="meal-portion">Food Portion</label>
                <input
                  type="text"
                  onChange={this.handleFieldChange}
                  id="FoodPortion"
                  value={this.state.FoodPortion}
                ></input>
              </section>

              <section>
                <label className="meal-comment">Comment</label>
                <textarea
                  type="text"
                  onChange={this.handleFieldChange}
                  value={this.state.Comment}
                  id="Comment"
                  rows="2"
                ></textarea>
              </section>

              <div className="meal-btn" id="meal-btn">
                <button
                  type="button"
                  onClick={this.editMeal}
                  className="meal-button"
                >
                  ENTER
                </button>
                
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}



export default MealEditForm;
