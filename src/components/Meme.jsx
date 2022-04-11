import React, { useEffect, useState } from "react";

function Meme () {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    const [allMemes, setAllMemes] = useState([])

    function getMemeImage () {
        const random = Math.round(Math.random() * allMemes.length)
        const url = allMemes[random].url
        setMeme(prev => {
            return {
                ...prev,
                randomImage: url
            }
        })
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    console.log(meme.topText)
    return (
        <main>
            <div className="form">
                <div className="input">
                    <input 
                        type="text"
                        placeholder="Enter text here"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        type="text"
                        placeholder="Enter text here"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button
                    className="meme--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src = {meme.randomImage} className="meme--image"/>
                <div className="meme--text top">{meme.topText}</div>
                <div className="meme--text bottom">{meme.bottomText}</div>
            </div>
        </main>
    )
}

export default Meme