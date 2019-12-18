import React, { Component } from 'react';
import PottyManager from '../../Modules/PottyManager';
class PottyEditForm extends Component {
    state = {
        action1: false,
        action2: false,
        comment: "",
        timeStamp: "",
        loadingStatus: true
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    editPotty = evt => {
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const editPotty = {
            comment: this.state.comment,
            action1: this.state.action1,
            action2: this.state.action2,
            timeStamp: this.state.timeStamp
        };
        PottyManager.update(editPotty).then(() => this.props.history.push("/pottys"));
    };
    componentDidMount() {
        PottyManager.get(this.props.match.parama.pottyId).then(potty => {
            console.log("potty",potty);
            this.setState({
                comment: potty.comment,
                action1: potty.action1,
                action2: potty.action2,
                timeStamp: new Date.now(),
                loadingStatus: false
            });
        });
    }


   

   
   
    render() {
        console.log("this.state",this.state);
        return(
            <form>
                <fieldset>
                <div className="card">
                    <div className="card-content">
                        <form>
                            <section>
                                <input type="checkbox" id="action1" onChange={this.handleFeildChange}></input>
                                <label className="action1-label">Tinkle</label>
                            </section>
                            <section>
                                <input type="checkbox" id="action2" onChange={this.handleFeildChange}></input>
                                <label className="action2-labe">Boo Boo</label>
                            </section>
                            <section>
                                <textarea type="text"  id="comment" onChange={this.handleFeildChange}></textarea>
                                <label className="comment-label">Comments</label>
                            </section>
                            <div className="potty-btn">
                                <button type="button" onClick={this.NewPotty}>Potty</button>
                            </div>
                        </form>
                    </div>
                </div> 
                </fieldset>
            </form>

        )
    }
}

export default PottyEditForm