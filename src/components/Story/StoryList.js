import React, { Component } from 'react';
import StoryManager from '../../Modules/StoryManager';
import { Link } from "react-router-dom"
import StorySection from './StorySection'



class StoryList extends Component {

        state = {
            stories: [],
        }

        componentDidMount() {
            const storedId = localStorage.getItem("credentials");
            StoryManager.storyUser(storedId)
            .then(storyArray => {
                this.setState({
                    stories: storyArray
                })
            })
        };

        deleteStory = id => {
            StoryManager.delete(id)
            .then(() => {
                const storedId = localStorage.getItem("credentials");
                StoryManager.storyUser(storedId)
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
                <>
                <Link to={`/story/new`}>ADD STORY</Link>
                <div>
            <p>{this.state.child}</p>
                {this.state.stories.map(story =>
                    <StorySection
                    key={story.id}
                    story={story}
                    deleteStory={this.deleteStory}
                    {...this.props}
                    />
                    )}
                </div>
                </>
            )
        }

}

export default StoryList