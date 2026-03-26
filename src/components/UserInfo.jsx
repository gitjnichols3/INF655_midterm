import React from "react";

export default class UserInfo extends React.Component {
    state = {
        name: "John Doe",
        profession: "Developer",
        luckyNumber: Math.floor(Math.random() * 100) + 1 /* generates an initial random number between 1 and 100 */
    };

    /* method generates a new lucky number and updates state */
    generateLuckyNumber = () => {
        const newNumber = Math.floor(Math.random() * 100) + 1;
        this.setState({ luckyNumber: newNumber });
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.profession}</p>
                <p>Your lucky number is: {this.state.luckyNumber}</p> {/* Displays number */}
                <button onClick={this.generateLuckyNumber}>Generate New Lucky Number</button><br />{/* Calls the method to generate a new number */}

                {/* <button onClick={this.props.handleClick}>Show alert</button>  Remnant from Assignment 2 disabled*/}
                
            </div>
        );
    }
}