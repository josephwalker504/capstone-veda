import React, { Component } from 'react';
import PottyManager from '../../Modules/PottyManager';


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
        PotttyManager.delete(id)
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

        )
    }
}