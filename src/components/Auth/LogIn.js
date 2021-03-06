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
        evt.preventDefault()
       
        if(this.state.email === "" || this.state.password === "") {
            window.alert("Please Sign In");
        } else {
            UserManager.getAll()
            .then(userArray => {
                userArray.map(users => {
                    if (this.state.email === users.email && this.state.password) 
                    {
                        console.log("user",users, this.state)
                       this.props.setUser(users.id)
                       this.props.history.push("/meals");
                       
                    }
                })
            })
        // localStorage.setItem(
        //    "credentials",
        //    JSON.stringify({
        //        id: this.state.id
        //     })
        //     ) 
        };
        
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