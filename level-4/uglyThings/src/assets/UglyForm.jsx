import React, { useState, useContext } from 'react';
import  {UglyContext} from './UglyContext';

export default function UglyForm() {
    
    const [uglyThing, setUglyThing] = useState({ // setting the form data from the user input to be a state variable 
        imgUrl: "",
        title: "",
        description: ""
    });

    // Accessing the context
    const { addUglyThing } = useContext(UglyContext); // accessing the addUglyThing function from Context 

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setUglyThing(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted:", uglyThing);

        addUglyThing(uglyThing);
        setUglyThing({         // Reset form fields after submission
            imgUrl: "",
            title: "",
            description: ""
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="imgUrl"
                    value={uglyThing.imgUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
                <input
                    type="text"
                    name="title"
                    value={uglyThing.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <input
                    type="text"
                    name="description"
                    value={uglyThing.description}
                    onChange={handleChange}
                    placeholder="Description"
                    
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
