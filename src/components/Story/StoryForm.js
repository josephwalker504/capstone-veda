import React, { Component } from 'react';
import StoryManager from '../../Modules/StoryManager';
import ChildManager from '../../Modules/ChildManager';



class StoryForm extends Component {


    state = {
        userId: "",
        childId: "",
        title: "",
        comment: "",
        timeStamp: "",
        loadingStatus: false,
        children: [],
    };

    componentDidMount() {
        StoryManager.get(this.props.match.params.storyId).then(story => {
            console.log("story", story);
            this.setState({
                userId: story.userId,
                childId: story.childId,
                title: story.title,
                comment: story.comment,
                timeStamp: new Date(),
                loadingStatus: false
            });
        });
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
        this.setState(stateToChange);
        console.log("handleFieldChange")
    };

    makeNewStory = evt => {
        evt.preventDefault();
        if(this.state.title === "" || this.state.comment === "") {
            window.alert("Please tell us more about the Book");
        
        } else {
            const storedId = localStorage.getItem("credentials");
            console.log("storedId", storedId);
            this.setState({ loadingStatus: true });
            const story = {
                userId: parseInt(storedId),
                childId: parseInt(this.state.childId),
                title: this.state.title,
                comment: this.state.comment,
                timeStamp: new Date()
            };
            StoryManager.post(story)
            .then(() => this.props.history.push("/stories"));
            console.log("makeNewStory")
        }
    }



    render() {
        return(
            <>
                <div>
                <label className="select-child">Select Child</label>
                <select onChange={this.handleFieldChange} id="childId" value={this.state.childId}>
                <option>Select Child</option>
                {this.state.children.map(children =>
                <option key={children.id} value={children.id}>{children.name}</option>
                                )}
                </select>
                </div>
                <div>
                    <input type="text" id="title" placeholder=" BOOK TITLE" onChange={this.handleFieldChange}></input>
                </div>
                <div>
                    <textarea type="text" rows="3" id="comment" placeholder="COMMENT HERE" onChange={this.handleFieldChange}></textarea>
                </div>
                <div>
                    <button type="button" onClick={this.makeNewStory}>ENTER</button>
                </div>
            </>
           
        )
    }
}

export default StoryForm