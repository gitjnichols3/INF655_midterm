import React from "react";

export default class UserInfo extends React.Component {
    state = {
        name: "John Doe",
        profession: "Developer"
    };

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.profession}</p>

                <button onClick={this.props.handleClick}>Show alert</button>
                
            </div>
        );
    }
}