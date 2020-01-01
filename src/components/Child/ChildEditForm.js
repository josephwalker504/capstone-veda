import React, { Component } from 'react';
import ChildManager from '../../Modules/ChildManager';


class ChildEditForm extends Component {


    state = {
        name: "",
        gender: "",
        birthdate: Date,
        userId: "",
        loadingStatus: true,
        user: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      editChild = evt => {
        const storedId = localStorage.getItem("credentials");
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const editChild = {
            id: this.props.match.params.childId,
            name: this.state.name,
            gender: this.state.gender,
            birthdate: this.state.birthdate,
            userId: parseInt(storedId)
        };
        ChildManager.update(editChild).then(() => this.props.history.push("/children"));
      };
      componentDidMount() {
        ChildManager.get(this.props.match.params.childId).then(child => {
          console.log("child", child);
          this.setState({
            name: child.name,
            gender: child.gender,
            birthdate: child.birthdate,
            loadingStatus: false,
            // userId: `${child.user.id}`
          });
        });
    //     const storedId = localStorage.getItem("credentials");
    // ChildManager.childUser(storedId).then(childArray => {
    //   console.log("componentDidMount", childArray);
    //   this.setState({
    //    children: childArray
    //   });
    //  });
  }

  deleteMeal = id => {
    ChildManager.delete(id)
    .then(() => {
        ChildManager.getAll()
        .then((makeChild) => {
            this.setState({
                children: makeChild
            })
        })
    })
}
    

    render() {
        console.log("this.state", this.state)
        return(
            <div className="childform">
            <form>
                <fieldset>
                    <div>
                        <label>Name of Child</label>
                        <input type="text" id="name" value={this.state.name} onChange={this.handleFieldChange}></input>
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type="text" id="gender" value={this.state.gender} onChange={this.handleFieldChange}></input>
                    </div>
                    <div>
                        <label>Date Of Birth</label>
                        <input type="date" id="birthdate" value={this.state.birthdate} onChange={this.handleFieldChange}></input>                
                    </div>
                    <div className="update-child-btn">
                        <button type="button" onClick={this.editChild}>Update Child</button>
                    </div>
                </fieldset>
            </form>
        </div>
        )
    }
} 

export default ChildEditForm