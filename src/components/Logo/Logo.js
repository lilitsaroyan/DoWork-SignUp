import React from 'react'
import logo from '../../assets/images/logo.png';
import './Logo.scss';

export default function Logo() {
    return (
        <a className="logo" href="https://dowork.ai/">
            <img src={logo} alt="logo" width="174" height="30" />
        </a>
    )
}
