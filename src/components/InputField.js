import React, { Component } from "react";

export default class InputField extends Component {
    render() {
        return (
        <input 
            type="text"
            id = { this.props.id }
            className= { this.props.className }
            placeholder = { this.props.placeholder }
            onChange = { this.props.onChange }
         />
        );
    }
}