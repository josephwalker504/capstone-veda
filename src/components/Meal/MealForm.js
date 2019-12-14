import React, { Component } from 'react';
import MealManager from '../../Modules/MealManager';



class MealForm extends Component {

    state = {
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
        console.log("handleFieldChange")
    };

    makeNewMeal = evt => {
        evt.preventDefault();
        if(this.state.FoodType === "" || this.state.FoodPortion === "" || this.state.Comment === "") {
            window.alert("All Fields Required");
        } else {
            this.setState({ loadingStatus: true });
            const meal = {
                FoodType: this.state.FoodType,
                FoodPortion: this.state.FoodPortion,
                Comment: this.state.Comment,
                timeStamp: new Date(),
                
            };
            MealManager.post(meal)
            .then(() => this.props.history.push("/meals"));
            console.log("makeNewMeal")
        }
    };


    componentDidMount(){
        MealManager.getAll()
        .then(meal => this.setState({meal: meal}))
    }

    render() {
        return(
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
                        <button type="button" onClick={this.makeNewMeal} className="meal-button">ENTER</button>
                    </div>

                </div>

            </div>
        )
    }

}

export default MealForm