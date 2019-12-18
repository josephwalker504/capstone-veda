import React, { Component } from 'react';
import PottyManager from '../../Modules/PottyManager';




class PottyForm extends Component {

        state = {
            action1: false,
            action2: false,
            comment: "",
            loadingStatus: false
        };

        handleFieldChange = evt => {
            const stateToChange = {};
            stateToChange[evt.target.id] = evt.target.value;
            this.setState(stateToChange);
            // console.log("handleFieldChange" )
        };

        pottySelection = evt => {
            this.setState({ loadingStatus: true });
            const checkedPotty = {
                action1: true,
                action2: true
            }
            checkedPotty[evt.target.id] = evt.target.value;
            this.setState(checkedPotty);

        }
        NewPotty = evt => {
            evt.preventDefault();
            if(this.state.comment === "") {
                window.alert("OOPS!! You Forgot Something");
            } else{
                this.setState({ loadingStatus: true });
                const potty = {
                    action1: this.state.action1,
                    action2: this.state.action2,
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
                            <section>
                                <input type="checkbox" id="action1" onChange={this.handleFieldChange} onClick={() =>{ this.pottySelection(this.props.pottyId)}}></input>
                                <label className="action1-label">Tinkle</label>
                            </section>
                            <section>
                                <input type="checkbox" id="action2" onChange={this.handleFieldChange}></input>
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