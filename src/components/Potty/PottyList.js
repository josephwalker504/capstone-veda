import React, { Component } from 'react';
import PottyManager from '../../Modules/PottyManager';
import { Link } from "react-router-dom";
import PottySection from './PottySection';



class PottyList extends Component {
    
    state = {
        pottys: [],
    }

    componentDidMount() {
        PottyManager.getAll()
        .then(pottyArray => {
            this.setState({
                pottys: pottyArray
            })
        })
    }
    deletePotty = id => {
        PottyManager.delete(id)
        .then(() => {
            PottyManager.getAll()
            .then((NewPotty) =>
            this.setState({
                potty: NewPotty
            }))
        })
    }
    
    render() {
        console.log('this. state', this.state)
        return(

            <>
                <div>
                    <section className="potty-add-btn">
                        <Link to={`potty/new`}>I Got To Potty</Link>
                    </section>
                    <div>
                        <p>{this.state.comment}</p>
                        {this.state.pottys.map(potty =>
                            <PottySection
                            key={potty.id} 
                            potty={potty}
                            deletePotty={this.deletePotty}
                            {...this.props}
                            />
                            )}
                    </div>
                </div>
            
            </>
        )
    }
}

export default PottyList