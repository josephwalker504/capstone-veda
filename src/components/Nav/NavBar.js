import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"


class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }


// clearUser = () => {
//     localStorage.removeItem("credentials")
//     this.setState({
//         user: this.isAuthenticated()
//     })
// }
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/children">Child</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/meals">Meal</Link>
                    </li>
                    <li>
                        <Link to="/pottys">Potty</Link>
                    </li>
                    <li>
                        <Link to="/sleeps">Sleep</Link>
                    </li>
                    <li>
                        <Link to="/stories">Story</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={this.handleLogout}>Log Out</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default withRouter(NavBar);