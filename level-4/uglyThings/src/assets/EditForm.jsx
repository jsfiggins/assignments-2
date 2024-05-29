import React, {useState} from 'react';

export default function EditForm ({uglyThing, editUglyThing, onSave}){

    const [updatedUglyThing,setUpdatedUglyThing] = useState({

        title: uglyThing.title,
        imgUrl: uglyThing.imgUrl,
        description: uglyThing.description
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUpdatedUglyThing((prevUglyThing) => ({
            ...prevUglyThing,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("subnmitting updated ugly thing:", updatedUglyThing);
        editUglyThing(uglyThing._id, updatedUglyThing);
        onSave();
    };

    return (
        <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="imgUrl"
                value={updatedUglyThing.imgUrl}
                onChange={handleChange}
                placeholder = "Image URL "
             />
            <input
                type="text"
                name="title"
                value={updatedUglyThing.title}
                onChange={handleChange}
                placeholder = "Title"
             />
                <input
                type="text"
                name="description"
                value={updatedUglyThing.description}
                onChange={handleChange}
                placeholder = "Description"
             />
              

             <button type="submit" >Save</button>

        </form>
    )

}