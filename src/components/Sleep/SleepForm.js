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
        SleepManager.get(this.props.match.params.sleepId).then(sleep => {
            this.setState({
                timeStamp: new Date(),
                comment: sleep.comment,
                loadingStatus: false,
                userId: sleep.userId,
                childId: sleep.childId
            });
        });
        const storeId = localStorage.getItem("credentials");
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
            const storedId = localStorage.getItem("credentials");
            console.log("storedId",storedId);
            this.setState({ loadingStatus: true });
            const sleep = {
                comment: this.state.comment,
                timeStamp: Date,
                userId: parseInt(storedId),
                childId: parseInt(this.state.childId)
            };
            SleepManager.post(sleep)
            .then(() => this.props.history.push("/sleeps"));
            console.log("NewSleep")
        }
    }


    render() {
        return(
            <div className="Sleep-Form">
                <div>
                    <form>
                    <label className="select-child">Select Child</label>
                        <select onChange={this.handleFieldChange} id="childId" value={this.state.childId}>
                            <option>Select Child</option>
                            {this.state.children.map(children =>
                                <option key={children.id} value={children.id}>{children.name}</option>)}
                        </select>
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