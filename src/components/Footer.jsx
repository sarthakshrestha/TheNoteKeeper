import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const date = new Date();
const year = date.getFullYear();

function Footer(){
    return(
        <footer className="footer">

            <p><i>Made by Sarthak Shrestha</i></p>
            <p style={{fontSize: '20px'}}><b>Copyright © {year}</b></p>
            <p style={{fontSize: '13px'}}>Powered by React</p>

        </footer>
    );
}

export default Footer;