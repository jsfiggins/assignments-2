import React, { useState, useEffect, useContext, useCallback } from 'react';
import { UserContext } from '../context/UserProvider';
import AddIssueForm from './AddIssueForm';
import CommentList from './CommentList';

export default function Issue(props) {
    const { _id, userId, username } = props;
    const { user, handleUpvote, handleDownvote, addComment, getCommentsByIssue, deleteIssue, editIssue } = useContext(UserContext);
    const [editToggle, setEditToggle] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const [issue, setIssue] = useState(props);
    const [lastVote, setLastVote] = useState(null);
    const [commentsVersion, setCommentsVersion] = useState(0);

    useEffect(() => {
        async function fetchComments() {
            try {
                const fetchedComments = await getCommentsByIssue(_id);
                setComments(fetchedComments);
            } catch (error) {
                console.error("Error fetching comments", error);
            }
        }
        if (_id) {
            fetchComments();
        }
    }, [_id, commentsVersion, getCommentsByIssue]);

    useEffect(() => {
        setIssue(props);
    }, [props]);

    useEffect(() => {
        const storedVote = localStorage.getItem(`vote_${_id}`);
        if (storedVote) {
            setLastVote(storedVote);
        }
    }, [_id]);

    const handleVote = useCallback(async (voteType) => {
        if (lastVote === voteType) return;

        try {
            if (voteType === 'upvote') {
                await handleUpvote(_id);
                setIssue(prevIssue => ({
                    ...prevIssue,
                    upvotes: [...(prevIssue.upvotes || []), user._id],
                    downvotes: (prevIssue.downvotes || []).filter(id => id !== user._id)
                }));
            } else {
                await handleDownvote(_id);
                setIssue(prevIssue => ({
                    ...prevIssue,
                    downvotes: [...(prevIssue.downvotes || []), user._id],
                    upvotes: (prevIssue.upvotes || []).filter(id => id !== user._id)
                }));
            }
            setLastVote(voteType);
            localStorage.setItem(`vote_${_id}`, voteType);
        } catch (error) {
            console.error(`Error handling ${voteType}`, error);
        }
    }, [_id, handleUpvote, handleDownvote, user._id, lastVote]);

    const handleAddComment = async () => {
        try {
            const comment = await addComment({ text: newComment, issueId: _id });
            setNewComment('');
            setComments(prevComments => [...prevComments, comment]);
            setCommentsVersion(prevVersion => prevVersion + 1);
        } catch (error) {
            console.error("Error adding comment", error);
        }
    };

    const handleEditIssue = async (updatedIssue) => {
        try {
            await editIssue(updatedIssue, _id);
            setIssue(prevIssue => ({ ...prevIssue, ...updatedIssue }));
            setEditToggle(false);
        } catch (error) {
            console.error("Error editing issue", error);
        }
    };

    const totalVotes = (issue.upvotes?.length || 0) - (issue.downvotes?.length || 0);

    return (
        <div className="issue-container">
            {!editToggle ? (
                <>
                    <h1>Posted by: {username}</h1>
                    {issue.imgUrl && <img src={issue.imgUrl} alt="Issue" className="issue-img" />}
                    <h1 className="issue-title">Issue Title: {issue.title}</h1>
                    <h4 className="issue-description">Issue Description: {issue.description}</h4>
                    <button 
                        onClick={() => handleVote('upvote')} 
                        className={lastVote === 'upvote' ? 'upvoted' : ''}
                    >
                        Upvote ({issue.upvotes?.length || 0})
                    </button>
                    <button 
                        onClick={() => handleVote('downvote')} 
                        className={lastVote === 'downvote' ? 'downvoted' : ''}
                    >
                        Downvote ({issue.downvotes?.length || 0})
                    </button>
                    <h4 className="totalVotes">Total Votes: {totalVotes}</h4>
                    {user._id === userId && (
                        <>
                            <button onClick={() => deleteIssue(_id)}>Delete</button>
                            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </>
                    )}
                    <CommentList issueId={_id} comments={comments} setComments={setComments} />
                    <div className="add-comment-section">
                        <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment"
                        />
                        <button onClick={handleAddComment}>Submit Comment</button>
                    </div>
                </>
            ) : (
                <>
                    <AddIssueForm
                        title={issue.title}
                        description={issue.description}
                        imgUrl={issue.imgUrl}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={handleEditIssue}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            )}
        </div>
    );
}
