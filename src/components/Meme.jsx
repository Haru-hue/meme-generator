import React from "react";

function Meme () {
    return (
        <main>
            <input 
                type="text"
                placeholder="Enter text here"
                name="topText"
            />
            <input 
                type="text"
                placeholder="Enter text here"
                name="topText"
            />
            <button
                className="meme--button"
            >
                Get a new meme image 🖼
            </button>
        </main>
    )
}

export default Meme