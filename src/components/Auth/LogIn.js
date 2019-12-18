import React, { Component } from 'react';

class LogIn extends Component {
    state = {
        email: "",
        password: ""
    
    }

    handleInputChange = (evt) => {
        const setToChange = {}
        setToChange[evt.target.id] =evt.target.value
        this.setState(setToChange)
    }

    handleLogin = (evt) => {
        evt.preventDefault()
       localStorage.setItem(
           "credentials",
           JSON.stringify({
               email: this.state.email,
               password: this.state.password,
               id: this.state.id
           })
           )
           this.props.history.push("/child");
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h3>LOGIN</h3>
                    <div>
                    <input onChange={this.handleInputChange} type="email"
                    id="email" 
                    placeholder="Email Address" 
                    require="" 
                    autoFocus="" />
                    <label htmlFor="inputEmail"></label>
                    <input onChange={this.handleInputChange} type="password"
                    id="password" 
                    placeholder="Password" 
                    require="" 
                    autoFocus="" />
                    <label htmlFor="inputPassword"></label>
                    <button type="submit">Sign In</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default LogIn