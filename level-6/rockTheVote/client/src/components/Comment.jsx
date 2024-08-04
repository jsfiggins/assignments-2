// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserProvider';

// export default function Comment({ comment }) {
//     const { user, deleteComment,editComment } = useContext(UserContext);

//     return (
//         <div className="comment">
//             <p className="comment-author">Posted by: {comment.userId.username}</p>
//             <p className="comment-text">{comment.text}</p>
//             {comment.userId._id === user._id && (
//                 <div className="comment-actions">
//                     <button onClick={() => deleteComment(comment._id)}>Delete Comment</button>
//                     <button onClick={()=> editComment(comment._id)}>Edit Comment </button>
//                 </div>
//             )}
//         </div>
//     );
// }
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export default function Comment({ comment }) {
    const { user, deleteComment, editComment } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedContent, setUpdatedContent] = useState(comment.text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        console.log('Saving comment with ID:', comment._id);
        console.log('Issue ID:', comment.issueId);
        console.log('Updated content:', updatedContent);
        editComment(comment._id, comment.issueId, updatedContent);
        setIsEditing(false);
    };
    

    const handleCancelClick = () => {
        setUpdatedContent(comment.text);
        setIsEditing(false);
    };

    return (
        <div className="comment">
            <p className="comment-author">Posted by: {comment.userId.username}</p>
            {isEditing ? (
                <div>
                    <textarea
                        value={updatedContent}
                        onChange={(e) => setUpdatedContent(e.target.value)}
                    />
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </div>
            ) : (
                <p className="comment-text">{comment.text}</p>
            )}
            {comment.userId._id === user._id && (
                <div className="comment-actions">
                    {!isEditing && (
                        <>
                            <button onClick={() => deleteComment(comment._id)}>Delete Comment</button>
                            {/* <button onClick={handleEditClick}>Edit Comment</button> */}
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
