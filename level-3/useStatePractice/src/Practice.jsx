import React from "react";



export default function Practice (){

    //1.) Pass in a new color of your choosing in place of the old one.
    
    const [color, setColor]= useState ("pink")

    setColor("purple")
    console.log(color)

    //2.) Toggle between the colors pink and blue. If the current color is pink , we want to set it to blue. If it's blue, set it to pink

    const [color2,setColor2]=useState("pink")
    setColor2(prevColor => (prevColor ==="pink" ? "blue": "pink"));
    console.log(color2)


    //3.) Add a new person object to the following people array in state.You can hard-code a new object but it must be a person object with firstName and lastName properties.

    const [people, setPeople] = useState([
        {
            firstName: "John",
            lastName: "Smith"
        }
    ])
    
    setPeople(prevPeople => {
        return[...prevPeople,
            {firstName:"Jane",
            lastName:"Foster"
        }
    ]
    })
    
    //4.) Change the following state-setting functions to use an implicit return 

        const [colors, setColors] = setState(["pink", "blue"])

        // explicit return 
        setColors(prevColors => {
            return [...prevColors, "green"]
        })

        // implicit return
        setColors(prevColors => [...prevColors, "green"])

                
            
        }

        const [countObject, setCountObject] = setState({
            count: 0
        })
        //explicit return 
        setCountObject(prevState=> {
            return {
                count: prevState.count + 1
            }
        })
        //implicit return 
        setCountObject.update(prevState=> ({count: prevState.count + 1 }))

     //5.)    Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.
            const [person, setPerson] = useState({
                firstName: "John",
                lastName: "Smith"
             })

             setPerson(prevPerson => ({
                ...prevPerson,
                age:30,
                
             }))  