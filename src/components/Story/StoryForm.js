import React, { Component } from 'react';



class StoryForm extends Component {


    state = {
        userId: "",
        childId: "",
        title: "",
        comment: "",
        timeStamp: "",
        loadingStatus: false,
        children: [],
    }



    render() {
        return(
            <div>
                <div>
                    <input type="text" id="title" placeholder="TITLE"></input>
                </div>
            </div>
        )
    }
}

export default StoryForm