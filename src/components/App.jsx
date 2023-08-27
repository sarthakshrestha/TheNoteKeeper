import React from "react";
import ReactDOM from "react-dom";

import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import "./styles.css";
import notes from "./Notes";

function App() {
    return (<div>
        <Header/>
        {notes.map(noteItem => (
            <Note
                key={noteItem.key}
                title={noteItem.title}
                content={noteItem.content}
            />))}

        <Footer/>
    </div>);
}

export default App;