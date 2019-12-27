import React, { Component } from 'react';
import UserManager from '../../Modules/UserManager';


class LogIn extends Component {
    state = {
        email: "",
        password: "",
        id: "",
    }

    handleInputChange = (evt) => {
        const setToChange = {}
        setToChange[evt.target.id] =evt.target.value
        this.setState(setToChange)
    }

    handleLogin = (evt) => {
        UserManager.getAll()
        .then(userArray => {
            userArray.map(users => {
                
                if (this.state.email === users.email) {
                   this.props.setUser({ 
                       email: this.state.email,
                       password: this.state.password,
                       id: users.id
                   })
                }
            })
        })
        evt.preventDefault()
        if(this.state.email === "" || this.state.password === "") {
            window.alert("Please Sign In");
        } else {
        localStorage.setItem(
           "credentials",
           JSON.stringify({
               email: this.state.email,
               password: this.state.password,
               id: this.state.id
            })
            ) 
        };
        
           this.props.history.push("/meals");
    }

    render() {
        return (
          <form onSubmit={this.handleLogin}>
            <fieldset>
                <h3>Please Sign In</h3>
                <div className="formgrid">
                    <input onChange={this.handleInputChange} type="email"
                        id="email"
                        placeholder="Email address"
                        required="" autoFocus="" />
                    <label htmlFor="inputEmail"></label>
    
                    <input onChange={this.handleInputChange} type="password"
                        id="password"
                        placeholder="Password"
                        required="" />
                    <label htmlFor="inputPassword"></label>
                </div>
                <button type="submit">
                    Sign in
                </button>
            </fieldset>
          </form>
        )
      }
}

export default LogIn