// import React, { useContext,useEffect } from 'react';
// import { UserContext } from '../context/UserProvider'
// import IssueList from './IssueList';
// import IssueForm from './IssueForm';

// function Profile() {

//     const { user, getUserIssues,issues,editIssue } = useContext(UserContext);

//     useEffect(() => {
//         getUserIssues(user.id)
//     }, [user])

  

//     return (
//         <>
//             <h1> {user.username} </h1>
//             <IssueForm  />
//             <IssueList issues ={issues} editIssue = {editIssue} />

//         </>
//     );
// }

// export default Profile;

import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';
import IssueForm from './IssueForm';

function Profile() {
    const { user, getUserIssues, issues, editIssue } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            getUserIssues(user.id);
        }
    }, [user]);

    return (
        <div className="profile-page">
            <h1>Welcome, {user.username} </h1>
            <IssueForm />
            <IssueList issues={issues} editIssue={editIssue} />
        </div>
    );
}

export default Profile;
