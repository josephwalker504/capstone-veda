import React, { Component } from 'react';
import ChildManager from '../../Modules/ChildManager';


class ChildForm extends Component {

    state = {
        name: "",
        gender: "",
        birthdate: Date,
        userId: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log("handleFieldChange")
    };

    makeChild = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.gender ==="" || this.state.birthdate === ""){
            window.alert("We Don't Know That Baby");
        } else{
            const storedId = localStorage.getItem("credentials");
            console.log("storedId",storedId);
            this.setState({ loadingStatus: true });
            const child = {
                name: this.state.name,
                gender: this.state.gender,
                birthdate: this.state.birthdate,
                userId: parseInt(storedId)
            }
            ChildManager.post(child)
            .then(() => this.props.history.push("/children"));
            console.log("makeChild")
        }

    }

    render() {
        return(
            <div className="childform">
                <form>
                    <fieldset>
                        <div>
                            <label>Name of Child</label>
                            <input type="text" id="name" onChange={this.handleFieldChange}></input>
                        </div>
                        <div>
                            <label>Gender</label>
                            <input type="text" id="gender" onChange={this.handleFieldChange}></input>
                        </div>
                        <div>
                            <label>Date Of Birth</label>
                            <input type="date" id="birthdate" onChange={this.handleFieldChange}></input>                
                        </div>
                        <div className="add-child-btn">
                            <button type="button" onClick={this.makeChild}>Add Child</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}

export default ChildForm