import React, { Component } from 'react';
import MealManager from '../../Modules/MealManager';
import Dropdown from 'react-dropdown'



class MealForm extends Component {

    state = {
        FoodType: "",
        FoodPortion: "",
        Comment: "",
        timeStamp: "",
        loadingStatus: false,
        userId: "",
        childId: "",
        children: []
    };
    componentDidMount() {
        const storedId = localStorage.getItem("currentUser");
        MealManager.childMeal(storedId).then(childArray => {
          console.log("componentDidMount", childArray);
          this.setState({
           children: childArray

          });
        });
      }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log("handleFieldChange")
    };
    
    makeNewMeal = evt => {
        evt.preventDefault();
        if(this.state.FoodType === "" || this.state.FoodPortion === "" || this.state.Comment === "") {
            window.alert("All Fields Required");
        } else {
            const storedId = localStorage.getItem("currentUser");
            console.log("storedId",storedId);
            this.setState({ loadingStatus: true });
            const meal = {
                FoodType: this.state.FoodType,
                FoodPortion: this.state.FoodPortion,
                Comment: this.state.Comment,
                timeStamp: new Date(),
                userId: parseInt(storedId),
                childId: parseInt(this.state.childId)
                
            };
            MealManager.post(meal)
            .then(() => this.props.history.push("/meals"));
            console.log("makeNewMeal")
        }
    };
   
  




    render() {
        return(
            <div className="card">
                <div className="card-content">
                    <section>
                        <label className="select-child">Select Child</label>
                        <select onChange={this.handleFieldChange} id="childId" value={this.state.childId}>
                            <option>Select Child</option>
                            {this.state.children.map(children =>
                                <option key={children.id} value={children.id}>
                                    {children.name}
                                </option>
                                )}
                        </select>

                    </section>
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
                        <button type="button" onClick={this.makeNewMeal} className="meal-button">ENTER</button>
                    </div>

                </div>

            </div>
        )
    }

}

export default MealForm