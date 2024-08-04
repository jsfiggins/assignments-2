import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export default function IssueForm() {
    const { addIssue } = useContext(UserContext);

    const initState = {
        title: "",
        description: "",
        imgUrl: "",
    };

    const [formData, setFormData] = useState(initState);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        addIssue(formData);
        setFormData(initState);
    }

    return (
        <form className="add-issue-form" onSubmit={handleSubmit}>
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title of Issue"
            />
            <input
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description of Issue"
            />
            <input
                name="imgUrl"
                value={formData.imgUrl}
                onChange={handleChange}
                placeholder="Image Url (optional)"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
