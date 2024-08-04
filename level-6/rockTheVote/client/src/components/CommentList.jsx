import React from 'react';
import Comment from './Comment';

export default function CommentList({ issueId, comments, setComments }) {
    const handleDeleteComment = (commentId) => {
        setComments(prevComments => prevComments.filter(comment => comment._id !== commentId));
    };

    return (
        <div className="comment-list">
            {comments.map(comment => (
                <Comment 
                    key={comment._id} 
                    comment={comment} 
                    issueId={issueId} 
                    onDelete={handleDeleteComment}
                />
            ))}
        </div>
    );
}
