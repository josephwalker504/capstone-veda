import React, { Component } from 'react';
import PottyManager from '../../Modules/PottyManager';
import ChildManager from '../../Modules/ChildManager';




class PottyForm extends Component {

        state = {
            action1: false,
            action2: false,
            comment: "",
            loadingStatus: false,
            userId: "",
            childId: "",
            children: []
        };

        componentDidMount() {
            const storedId = localStorage.getItem("credentials");
            ChildManager.childUser(storedId).then(childArray => {
              console.log("componentDidMount", childArray);
              this.setState({
               children: childArray
              });
             });
            }

        handleFieldChange = evt => {
            const stateToChange = {};
            stateToChange[evt.target.id] = evt.target.value;
            console.log("evt.target.value",evt.target.value)
            this.setState(stateToChange);
            console.log("handleFieldChange")
        };

        pottySelection = evt => {
            this.setState({ loadingStatus: true });
            const checkedPotty = {
                action1: true,
                action2: true
            }

        }
        NewPotty = evt => {
            evt.preventDefault();
            if(this.pottySelection === true) {
                window.alert("OOPS!! You Forgot Something");
            } else{
                const storedId = localStorage.getItem("credentials");
                this.setState({ loadingStatus: true });
                const potty = {
                    userId: parseInt(storedId),
                    action1: this.state.action1 ==="true",
                    action2: this.state.action2 ==="true",
                    comment: this.state.comment,
                    timeStamp: new Date()
                };
                PottyManager.post(potty)
                .then(() => this.props.history.push("/pottys"));
                console.log("NewPotty")
            }
            
        };

        render() {
            console.log("this.state",this.state)
            return(
                <div className="card">
                    <div className="card-content">
                        <form>
                        <select onChange={this.handleFieldChange} id="childId" value={this.state.childId}>
                            <option>Select Child</option>
                            {this.state.children.map(children =>
                                <option key={children.id} value={children.id}>
                                    {children.name}
                                </option>
                                )}
                        </select>
                            <section>
                                <input type="checkbox" id="action1" onChange={this.handleFieldChange} onClick={() =>{ this.pottySelection(this.props.pottyId)}} value="true"></input>
                                <label className="action1-label">Tinkle</label>
                            </section>
                            <section>
                                <input type="checkbox" id="action2" onChange={this.handleFieldChange} value="true"></input>
                                <label className="action2-labe">Boo Boo</label>
                            </section>
                            <section>
                                <textarea type="text"  id="comment" onChange={this.handleFieldChange}></textarea>
                                <label className="comment-label">Comments</label>
                            </section>
                            <div className="potty-btn">
                                <button type="button" onClick={this.NewPotty}>Potty</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

     
}

export default PottyForm