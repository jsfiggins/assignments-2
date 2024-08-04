import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';

function Public() {
    const { issues, getAllIssues } = useContext(UserContext);

    useEffect(() => {
        getAllIssues();
    }, []);

    return (
        <div className="public-page">
            <h1>All Issues</h1>
            <IssueList issues={issues} />
        </div>
    );
}

export default Public;
