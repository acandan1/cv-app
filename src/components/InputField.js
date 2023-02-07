import React from "react";

export default function InputField(props) {
    return (
        <input 
            type="text"
            id = { props.id }
            className= { props.className }
            placeholder = { props.placeholder }
            onChange = { props.onChange }
            />
    );
}