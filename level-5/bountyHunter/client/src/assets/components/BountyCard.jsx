import React, { useState } from 'react';
import AddBountyForm from './AddBountyForm';

export default function BountyCard({ bounty, deleteBounty, editBounty }) {
  const [editToggle, setEditToggle] = useState(false);
  const [updatedBounty, setUpdatedBounty] = useState(bounty);

  return (
    <div className="bounty-card">
      {!editToggle ? (
        <>
          <h2>{bounty.firstName} {bounty.lastName}</h2>
          <p>Type: {bounty.type}</p>
          <p>Living: {bounty.living ? 'Yes' : 'No'}</p>
          <p>Bounty Amount: ${bounty.bountyAmount ? bounty.bountyAmount.toLocaleString() : 'N/A'}</p>
          {bounty.image && <img src={bounty.image} alt={`${bounty.firstName} ${bounty.lastName}`} />}
          <button className="delete-btn" onClick={() => deleteBounty(bounty._id)}> Delete </button>
          <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}> Edit </button>
        </>
      ) : (
        <>
          <AddBountyForm
            {...updatedBounty}
            btnText="Submit Edit"
            submit={(updates) => {
              editBounty(updates, updatedBounty._id);
              setEditToggle(false); // Close the form after submitting
            }}
            closeForm={() => setEditToggle(false)} // Close form on submit
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </>
      )}
    </div>
  );
}
