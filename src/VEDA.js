import React, { Component } from 'react';
import NavBar from './components/Nav/NavBar';
import PathView from "./components/PathView"




// let i = localStorage.getItem("currentUser", 1)
// localStorage.setItem("currentUser", 1)

class VEDA extends Component {

    state = {
        user: false,
    }

    isAuthenticated = () =>localStorage.getItem("credentials") !==null
    setUser = (authObj) => {
        localStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
            )
           
        }



clearUser = () => {
    localStorage.removeItem("credentials")
    this.setState({
        user: this.isAuthenticated()
    })
}

componentDidMount() {
    this.setState({
        user: this.isAuthenticated()
    })
}
    render() {
        return (
           <React.Fragment>
               <NavBar clearUser={this.clearUser}  />
               <PathView setUser={this.setUser} user={this.user}
                />
           </React.Fragment>
        )
    }
}

export default VEDA