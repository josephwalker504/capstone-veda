import React, { Component } from 'react';

class ChildForm extends Component {

    render() {
        return(
            <div className="childform">
                <form>
                    <fieldset>
                        <div>
                            <input type="text" id="name">Name</input>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }

}

export default ChildForm