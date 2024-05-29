import React, { useState } from "react"
import axios from "axios";


const UglyContext = React.createContext()


function UglyContextProvider(props) {

  const [uglyThings, setUglyThings] = useState([]);

  function addUglyThing(uglyThing) {

    axios.post("https://api.vschool.io/jaseanefiggins/thing", uglyThing)
      .then((response) => {
        console.log("Response data:", response.data)
        setUglyThings((prevUglyThings) => [...prevUglyThings, response.data]);
      })
      .catch((error) => {
        console.error("Error adding ugly thing:", error);
      });
  }

  function deleteUglyThing(_id) {
    axios.delete(`https://api.vschool.io/jaseanefiggins/thing/${_id}`)
      .then((response) => {
        setUglyThings((prevUglyThings) => prevUglyThings.filter((uglyThing) => uglyThing._id !== _id));
      })
      .catch((error) => {
        console.error("Error deleting ugly thing:", error);
      });
  }



  function editUglyThing(_id, updatedUglyThing) {

    console.log("Editing ugly thing with ID of :", _id);
    console.log("Updated ugly thing data:", updatedUglyThing);

    axios.put(`https://api.vschool.io/jaseanefiggins/thing/${_id}`, updatedUglyThing)
      .then((response) => {
        setUglyThings((prevUglyThings) => {
          return prevUglyThings.map((uglyThing) => {
            if (uglyThing._id === _id) {
              return { ...uglyThing, ...response.data };
            }
            return uglyThing;
          })
        })
      })

      .catch((error) => {
        console.error("Error editing ugly thing:", error);
      });
  }





  return (

    <UglyContext.Provider value={{ uglyThings, addUglyThing, deleteUglyThing, editUglyThing }}>
      {props.children}
    </UglyContext.Provider>

  );
}


export { UglyContextProvider, UglyContext }