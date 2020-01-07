import React, { Component } from 'react';
import SleepManager from '../../Modules/SleepManager';
import { Link } from "react-router-dom";
import SleepSection from './SleepSection';



class SleepList extends Component {


    state = {
        sleeps: [],
    }

    componentDidMount() {
        const storedId = localStorage.getItem("credentials");
        SleepManager.sleepUser(storedId)
        .then(sleepArray => {
            this.setState({
                sleeps: sleepArray
            })
        })
    }

    deleteSleep = id => {
        const storedId = localStorage.getItem("credentials");
        SleepManager.delete(id)
        .then(() => {
            SleepManager.sleepUser(storedId)
            .then((NewSleep) =>
            this.setState({
                sleeps: NewSleep
            }))
        })
    }


    render() {
        return(

            <>
            <div>
                <section className="sleep-add-btn">
                    <Link to={`sleep/new`}>Nite Nite</Link>
                </section>
                <div>
                    <p>{this.state.comment}</p>
                    {this.state.sleeps.map(sleep =>
                        <SleepSection
                        key={sleep.id} 
                        sleep={sleep}
                        deleteSleep={this.deleteSleep}
                        {...this.props}
                        />
                        )}
                </div>
            </div>
        
        </>
        )
    }

}

export default SleepList