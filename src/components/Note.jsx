import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import notes from "./Notes";

function Note(props) {
    return (<div className="note-box">
            <h1><b>{props.title}</b></h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;