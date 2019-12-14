import React, { Component } from 'react';



class Reg extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: "",
        loadingStatus: false
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewUser = evt => {
        evt.preventDefault();
        if (this.state.email ==="" || this.state.password ==="" || this.state.confirmPassword ==="") {
            window.alert("You're Missing Something");
        } else{
            this.setState({ loadingStatus: true });
            const user = {
                email: this.state.email,
                password: this.state.password,
            };
        }
    }

    handleReg = evt => {
        evt.preventDefault();
        this.props.newUser({
            email: this.state.email,
            password: this.state.password
        })
    }

    render() {

    
        return (
            <form onSubmit={this.handleReg}>
              <fieldset>
                  <h1>Welcome</h1>
                <h3>Please sign in</h3>
                <div className="formgrid">
                  <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                  <label htmlFor="inputEmail"></label>
      
                  <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                  <label htmlFor="inputPassword"></label>
      
                  <input onChange={this.handleFieldChange} type="password"
                    id="confirmPass"
                    placeholder="Confirm Password"
                    required="" />
                  <label htmlFor="inputPassword"></label>
                  
      
                </div>
                <button type="submit" disabled={this.state.loadingStatus} onClick={this.constructNewUser}>
                  Register
                  </button>
              </fieldset>
            </form>
          )
        }

}

export default Reg