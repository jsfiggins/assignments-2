import React, { useState, useEffect } from "react";

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        image: ""
    });

    const [allMemes, setAllMemes] = useState([]);//holds meme data  
    const [memesList, setMemesList] = useState([]);//holds the list of memes
    const [editIndex, setEditIndex] = useState(-1); // Initialize editIndex with -1 to show  that no meme is being edited.


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setAllMemes(data.data.memes);
                const randomNumber = Math.floor(Math.random() * data.data.memes.length);
                const url = data.data.memes[randomNumber].url;
                setMeme(prevMeme => ({
                    ...prevMeme,
                    image: url
                }));
            });
    }, []);


    function getMemeImage(event) {
        event.preventDefault();//prevents the page reloading when we submit the form
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            image: url
        }));
    }

    function handleChange(event) { //updates meme state  with user input from form fields 
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    function addMemeToList(event) { // add a new meme or editing an existing one 
        event.preventDefault();
        if (editIndex !== -1) {
            setMemesList(prevList => {
                const newList = [...prevList];
                newList[editIndex] = meme;
                return newList;
            });
            setEditIndex(-1);
        } else {
            if (meme.image !== "") {
                setMemesList(prevList => [...prevList, meme]);
            }
        }
        setMeme({
            topText: "",
            bottomText: "",
            image: ""
        });
        getMemeImage(event);
    }

    function editMeme(index) {
        setEditIndex(index);
        setMeme(memesList[index]); // Populate meme with data from memesList
    }

    function deleteMeme(index) {
        setMemesList(prevList => prevList.filter((_, i) => i !== index));
    }

    return (
        <div className="container">
            <form className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="formInput"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="formInput"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button
                    className="formButton"
                    onClick={getMemeImage}
                >
                    
                    Generate New image
                </button>

                <button
                    className="formButton"
                    onClick={addMemeToList}
                >
                    Add to List
                </button>
            </form>

            <div className="meme">
                <h2 className="memeText top">{meme.topText}</h2>
                <img src={meme.image} className="memeImage" alt="Meme" />
                <h2 className="memeText bottom">{meme.bottomText}</h2>
            </div>

            <div>
                <h2 className="memesList">Memes List</h2>
                <ul>
                    {memesList.map((item, index) => (
                        <li key={index}>
                            <div className="meme">
                                <h2 className="memeText top">{item.topText}</h2>
                                <img src={item.image} className="memeImage" alt="Meme" />
                                <h2 className="memeText bottom">{item.bottomText}</h2>
                            </div>
                            <button className="formButton" onClick={() => editMeme(index)}>Edit</button>
                            <button className="formButton" onClick={() => deleteMeme(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
