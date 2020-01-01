import React, { Component } from 'react';
import ChildManager from '../../Modules/ChildManager';
import SleepManager from '../../Modules/SleepManager';



class SleepForm extends Component {

    state = {
        userId: "",
        childId: "",
        comment: "",
        timeStamp: "",
        loadingStatus: false,
        children: []
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log("handleFieldChange")
    };

    
    componentDidMount() {
        const storeId = localStorage.getItem("currentUser");
        ChildManager.childUser(storeId).then(childArray => {
            console.log("componentDidMount", childArray);
            this.setState({
                children: childArray
            });
        });
    }

  

    NewSleep = evt => {
        evt.preventDefault();
        if(this.state.comment === '') {
            window.alert("Please provide a comment");
        } else {
            const storedId = localStorage.getItem("setUser");
            console.log("storedId",storedId);
            this.setState({ loadingStatus: true });
            const sleep = {
                comment: this.state.comment,
                timeStamp: Date,
                userId: parseInt(storedId),
                childId: parseInt(this.state.childId)
            };
            SleepManager.post(sleep)
            .then(() => this.props.history.push("sleeps"));
            console.log("NewSleep")
        }
    }


    render() {
        return(
            <div className="Sleep-Form">
                <div>
                    <form>
                        <section>
                            <h2 id="timeStamp">TIME:</h2>
                        </section>
                        <section>
                            <label>Comment</label>
                            <textarea type="text" onChange={this.handleFieldChange} id="comment"></textarea>
                        </section>
                        <section>
                        <button type="button" onClick={this.NewSleep}>SLEEP</button>
                        </section>
                    </form>
                </div>
            </div>
        )
    }
}

export default SleepForm