import React, { useState } from 'react';

export default function AddIssueForm({ title, description, imgUrl, submit, btnText, closeForm }) {
    const [inputs, setInputs] = useState({ title, description, imgUrl });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs);
    };

    return (
        <form className="add-issue-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="text"
                name="imgUrl"
                value={inputs.imgUrl}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <button type="submit">{btnText}</button>
            <button type="button" onClick={closeForm}>Cancel</button>
        </form>
    );
}
