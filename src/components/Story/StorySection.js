import React, { Component } from 'react';
import StoryManager from '../../Modules/StoryManager';




class StorySection extends Component {
    render() {
        return(
            <div>
                <div>
        <h1>{this.props.title}</h1>
        <h3 onClick={() =>{this.props.history.push(`/stories/${this.props.story.id}/edit`)}}><b>{this.props.story.title}</b></h3>
        <button type="button" onClick={() =>{this.props.history.push(`/stories/${this.props.story.id}/edit`)}}>EDIT</button> 
        <button type="button" onClick={() => this.props.deleteStory(this.props.story.id)}>DELETE</button>
                </div>
            </div>
        )
    }
}

export default StorySection