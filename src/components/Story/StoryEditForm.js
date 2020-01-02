import React, { Component } from 'react';
import StoryManager from '../../Modules/StoryManager';
import ChildManager from '../../Modules/ChildManager';


class StoryEditForm extends Component {

    state = {
        userId: "",
        childId: "",
        title: "",
        comment: "",
        loadingStatus: true,
        children: [],
        timeStamp: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
        console.log("handleFieldChange")
      };

      editStory = evt => {
    const storedId = localStorage.getItem("credentials");
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editStory = {
      id: this.props.match.params.storyId,
      title: this.state.title,
      comment: this.state.comment,
      timeStamp: this.state.timeStamp,
      userId: parseInt(storedId),
      childId: parseInt(this.state.childId)
    };
    StoryManager.update(editStory).then(() => this.props.history.push("/stories"));
  };

  componentDidMount() {
    StoryManager.get(this.props.match.params.storyId).then(story => {
      console.log("story", story);
      this.setState({
        title: story.title,
        comment: story.comment,
        timeStamp: new Date(),
        loadingStatus: false,
        childId: story.childId,
        userId: story.userId
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

  deleteMeal = id => {
    StoryManager.delete(id)
    .then(() => {
        StoryManager.getAll()
        .then((makeNewStory) => {
            this.setState({
                stories: makeNewStory
            })
        })
    })
}

render() {
    console.log("this.state", this.state)
    return(
        <form>
            <fieldset>
               <div>
               <select onChange={this.handleFieldChange} id="childId" value={this.state.childId}>
                <option>Select Child</option>
                {this.state.children.map(children =>
                    <option key={children.id} id={children.id} value={children.id}>{children.name}</option>
                  )}
                </select>
                <section>
                    <input type="text" onChange={this.handleFieldChange} id="title" value={this.state.title}></input>
                </section>
                <section>
                    <textarea type="text" rows="2" onChange={this.handleFieldChange} id="comment" value={this.state.comment}></textarea>
                </section> 
                <section>
                    <button type="button" onClick={this.editStory}>ENTER</button>
                </section>

                </div> 
            </fieldset>
        </form>
    )
}
}

export default StoryEditForm