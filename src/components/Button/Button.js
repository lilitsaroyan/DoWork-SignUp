import React from 'react'

export default function Button(props) {
    const btnClasses = `btn btn-${props.btnName}`;
    return (
    <button className={btnClasses} type={props.btnType}>{props.btnText}</button>
    )
}
