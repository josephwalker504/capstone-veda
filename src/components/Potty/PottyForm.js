import React, { Component } from 'react';



class PottyForm extends Component {
    render() {

        state = {
            action1: "",
            action2: "",
            comment: "",
            timeStamp: "",
            loadingStatus: false
        };

        handleFieldChange = evt => {
            const setToChange = {}
            setToChange[evt.target.id] = evt.targret.value;
            this.setState(setToChange)
            console.log("handleFieldChange", handleFieldChange)
        };
        NewPotty = evt => {
            evt.preventDefault();
            if(this.state.action1 === "" || this.state.action2 === "" || this.state.comment === "")
                window.alert('OOPS!! You Forgot Something')
        }

        return(

        )
    }
}