import React, { useContext, useState } from 'react';
import { UglyContext } from './UglyContext';
import EditForm from './EditForm';

export default function UglyList() {
  const { uglyThings, deleteUglyThing, editUglyThing } = useContext(UglyContext);
  const [editingId, setEditingId] = useState(null); // Difference 1: Changed state variable name from `editedIndex` to `editingId`
  

  const handleDelete = (_id) => {
    deleteUglyThing(_id);
  };

  const handleEdit = (_id) => {
    setEditingId(_id); // Difference 2: Using _id directly as editingId instead of index
  };

  const handleSave = () => {
    setEditingId(null);
  }


  return (
    <div>
      {uglyThings.map((uglyThing) => (
        <div key={uglyThing._id}>
            
          {editingId === uglyThing._id ? ( // Difference 4: Comparing editingId with uglyThing._id
            <EditForm 
            uglyThing={uglyThing}
             editUglyThing={editUglyThing}
             onSave= {handleSave}  
             />
          ) : (
            <>
              <img src={uglyThing.imgUrl} alt={uglyThing.title} />
              <h2>{uglyThing.title}</h2>
              <p>{uglyThing.description}</p>
              <button onClick={() => handleDelete(uglyThing._id)}>Delete</button>
              <button onClick={() => handleEdit(uglyThing._id)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
