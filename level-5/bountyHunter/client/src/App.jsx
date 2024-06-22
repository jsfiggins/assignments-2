import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BountyCard from './assets/components/BountyCard';
import AddBountyForm from './assets/components/AddBountyForm';

function App() {
  const [bounties, setBounties] = useState([]);



  function getBounties() {
    axios.get("/api/bounty")
      .then(res => {
        if (Array.isArray(res.data)) {
          setBounties(res.data);
        } else {
          console.error("API response is not an array:", res.data);
        }
      })
      .catch(err => console.log(err));
  }

  function addBounty(newBounty) {
    axios.post('/api/bounty', newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data]);
      })
      .catch(err => console.log(err));
  }

  function deleteBounty(bountyId) {
    axios.delete(`/api/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId));
      })
      .catch(err => console.log(err));
  }

  function editBounty(updates, bountyId) {
    axios.put(`/api/bounty/${bountyId}`, updates)
     .then(res => {
        const updatedBounty = res.data;
        const index = bounties.findIndex(bounty => bounty._id === bountyId);
        if (index !== -1) {
          const newBounties = [...bounties];
          newBounties[index] = updatedBounty;
          setBounties(newBounties);
        }
      })
     .catch(err => console.log(err));
  }

 

  useEffect(() => {
    getBounties();
  }, []);

  return (
    <>

      <h1>BOUNTY HUNT</h1>
      <AddBountyForm submit={addBounty} btnText="Add Bounty" />
      <div className="bounty-list">
        {bounties.map(bounty => {
          console.log(`Bounty _id: ${bounty._id}`); 
          return (
            <BountyCard
              key={bounty._id}
              bounty={bounty}
              deleteBounty={deleteBounty}
              editBounty={editBounty}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
