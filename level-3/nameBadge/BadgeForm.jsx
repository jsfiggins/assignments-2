import React from "react";
import Badge from "./Badge";

export default function Form(){
     
    const [formInput,setFormInput]=React.useState({

        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        birthplace:"",
        faveFood:"",
        textarea:""

    })

    const [badge,setBadges]=React.useState([]);
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    }






    const handleSubmit = (event) => {
        event.preventDefault();
    
        setBadges((prevBadges)=>[...prevBadges,formInput]);
        setFormInput({
            firstName:"",
            lastName:"",
            email:"",
            phone: "",
            birthplace: "",
            faveFood:"",
            textarea:""
        })
        console.log(formInput);
    }








    return(
        <div>
            <h2>Form Inputs</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input 
                        type="text" 
                        name="firstName" 
                        value={formInput.firstName} 
                        onChange={handleChange} 
                        minLength={3} 
                        required
                    />
                </label>
                <label>
                    Last Name:
                    <input 
                        type="text" 
                        name="lastName" 
                        value={formInput.lastName} 
                        onChange={handleChange} 
                        minLength={3} 
                        required
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formInput.email} 
                        onChange={handleChange} 
                        minLength={3} 
                        required
                    />
                </label>
                <label>
                    Phone:
                    <input 
                        type="number" 
                        name="phone" 
                        value={formInput.phone} 
                        onChange={handleChange} 
                        minLength={3}
                        required
                    />
                </label>
                <label>
                    Birthplace:
                    <input 
                        type="text" 
                        name="birthplace" 
                        value={formInput.birthplace} 
                        onChange={handleChange} 
                        minLength={3}required

                    />
                </label>
                <label>
                    Favorite Food:
                    <input 
                        type="text" 
                        name="faveFood" 
                        value={formInput.faveFood} 
                        onChange={handleChange} 
                        minLength={3} 
                        required
                    />
                </label>
                <label>
                    Textarea:
                    <textarea 
                        name="textarea" 
                        value={formInput.textarea} 
                        onChange={handleChange} 
                        minLength={3} 
                        required
                    />
                </label>
                <button type="submit" > Submit</button>
            </form>
            
            <div>
                <h2>Badges</h2>
                {badge.map((badge,index)=>(
                    <Badge key = {index}{...badge} />
               ) )}
            </div>
        </div>
    )
}
