import React from "react";
import ReactDOM from "react-dom"
import "./styles.css";
import logo from './CelticKnot.jpg';
function Header() {
    return (<header className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <h1> TheNoteKeeper </h1>
        </header>
    );
}

export default Header;