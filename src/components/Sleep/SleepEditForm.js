import React, { Component } from 'react';
import ChildManager from '../../Modules/ChildManager';
import SleepManager from '../../Modules/SleepManager';



class SleepEditForm extends Component {

    state ={
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
    };

    editSleep = evt => {
        const storedId = localStorage.getItem("currentUser");
        evt.preventDefault();
        this.setState({ loadingStatus: true });
        const editSleep = {
          id: this.props.match.params.sleepId,
          comment: this.state.comment,
          timeStamp: this.state.timeStamp,
          userId: parseInt(storedId),
          childId: parseInt(this.state.childId)
        };
        SleepManager.update(editSleep).then(() => this.props.history.push("/sleeps"));
      };

      componentDidMount() {
        SleepManager.get(this.props.match.params.sleepId).then(sleep => {
          console.log("sleep", sleep);
          this.setState({
            comment: sleep.comment,
            timeStamp: new Date(),
            loadingStatus: false,
            // childId: `${sleep.child.id}`
          });
        });
        const storedId = localStorage.getItem("currentUser");
        ChildManager.childUser(storedId).then(childArray => {
          console.log("componentDidMount", childArray);
          this.setState({
           children: childArray
          });
         });
      }

      deleteSleep = id => {
        SleepManager.delete(id)
        .then(() => {
            SleepManager.getAll()
            .then((NewSleep) => {
                this.setState({
                    sleeps: NewSleep
                })
            })
        })
    }


    render() {
        return(

            <div className="Sleep-Form">
            <div>
                <form>
                    <section>
                        <h2 id="timeStamp" value={this.state.timeStamp}>TIME:</h2>
                    </section>
                    <section>
                        <label>Comment</label>
                        <textarea type="text" value={this.state.comment} onChange={this.handleFieldChange} id="comment"></textarea>
                    </section>
                    <section>
                    <button type="button" onClick={this.editSleep}>SLEEP</button>
                    </section>
                </form>
            </div>
        </div>
        )
    }
}

export default SleepEditForm