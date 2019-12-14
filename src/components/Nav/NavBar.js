import React, { Component } from 'react';
import { Link } from "react-router-dom"


class NavBar extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link>Child</Link>
                    </li>
                    <li>
                        <Link>Meal</Link>
                    </li>
                    <li>
                        <Link>Potty</Link>
                    </li>
                    <li>
                        <Link>Sleep</Link>
                    </li>
                    <li>
                        <Link>Story</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default NavBar