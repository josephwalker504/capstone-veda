import React, { Component } from 'react';


class SleepSection extends Component {


    render() {
        return(
            <div>
                <div>
                    <h2>{this.props.sleep.timeStamp}</h2>
                    <h3>{this.props.sleep.comment}</h3>
                    <button type="button" className="btn" onClick={() =>{this.props.history.push(`/sleeps/${this.props.sleep.id}/edit`)}}>EDIT</button>
                    <button type="button" className="btn" onClick={() => this.props.deleteSleep(this.props.sleep.id)} >Delete</button>
                </div>
            </div>
        )
    }
}

export default SleepSection