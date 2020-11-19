import React from 'react';
import "./InputField.scss";

export default function InputField(props) {
    const {id, value, type, label, placeholder, changed, checked, hasError} = props;
    return (
        <div className="inputField">
            <input type={type} required placeholder={placeholder} id={id} value={value} onChange={e => changed(e, id)}/>
            { id === 'checkbox' && <div className="checkMark">{checked && <span className="checked"></span>}</div> }
            <label htmlFor={id}>{label}</label>
            {hasError && <p>This field is required</p>}
        </div>
    )
}
