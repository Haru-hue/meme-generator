import React from "react";
import troll from "../images/troll-face.png"

function Header ()  {
    return (
        <header className="meme--header">
            <img 
                src={troll}
                className="header--image"
                alt=" "
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

export default Header