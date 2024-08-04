import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import Issue from './Issue';

export default function IssueList() {
    const { issues, getAllIssues } = useContext(UserContext);
    const [sortedIssues, setSortedIssues] = useState([]);

    useEffect(() => {
        async function fetchIssues() {
            await getAllIssues();
        }
        fetchIssues();
    }, []);

    useEffect(() => {
        const sorted = [...issues].sort((a, b) => {
            const aVotes = (a.upvotes?.length || 0) - (a.downvotes?.length || 0);
            const bVotes = (b.upvotes?.length || 0) - (b.downvotes?.length || 0);
            return bVotes - aVotes;
        });
        setSortedIssues(sorted);
    }, [issues]);

    return (
        <div className="issue-list">
            {sortedIssues.map(issue => (
                <Issue key={issue._id} {...issue} />
            ))}
        </div>
    );
}
