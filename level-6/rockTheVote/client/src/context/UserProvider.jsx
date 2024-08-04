import React, { useState } from "react";
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        comments: [],
        errMsg: "",
    };

    const [userState, setUserState] = useState(initState);

    // Fetch all issues
    async function getAllIssues() {
        try {
            const res = await userAxios.get("/api/main/issues/all");
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }));
        } catch (error) {
            console.error("Error fetching all issues:", error.response ? error.response.data : error.message);
        }
    }

    // Handle user signup
    async function signup(creds) {
        try {
            const res = await axios.post('/api/auth/signup', creds);
            const { user, token } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }));
        } catch (error) {
            handleAuthErr(error.response?.data?.errMsg || "Signup failed");
        }
    }

    // Handle user login
    async function login(creds) {
        try {
            const res = await axios.post('/api/auth/login', creds);
            const { user, token } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }));
        } catch (error) {
            handleAuthErr(error.response?.data?.errMsg || "Login failed");
        }
    }

    // Handle user logout
    async function logout() {
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setUserState(prevUserState => ({
                ...prevUserState,
                token: "",
                user: {}
            }));
        } catch (error) {
            console.error("Error logging out:", error);
        }
    }

    // Handle authentication errors
    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }));
    }

    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }));
    }

    // Get user issues
    async function getUserIssues() {
        try {
            const res = await userAxios.get('/api/main/issues/user');
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }));
        } catch (error) {
            console.error("Error fetching user issues:", error);
        }
    }

    // Add a new issue
    async function addIssue(newIssue) {
        try {
            const res = await userAxios.post('/api/main/issues', newIssue);
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }));
        } catch (error) {
            console.error("Error adding new issue:", error);
        }
    }

    // Edit an existing issue
    async function editIssue(updatedIssue, issueId) {
        try {
            const res = await userAxios.put(`/api/main/issues/${issueId}`, updatedIssue);
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue =>
                    issue._id === issueId ? res.data : issue
                )
            }));
        } catch (error) {
            console.error("Error editing issue:", error);
        }
    }

    // Delete an issue
    async function deleteIssue(issueId) {
        try {
            await userAxios.delete(`/api/main/issues/${issueId}`);
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id !== issueId)
            }));
        } catch (error) {
            console.error("Error deleting issue:", error);
        }
    }

    // Handle upvote
    async function handleUpvote(issueId) {
        try {
            const res = await userAxios.put(`/api/main/issues/upvotes/${issueId}`);
            const updatedIssue = res.data;
            setUserState(prevUserState => {
                const updatedIssues = prevUserState.issues.map(issue =>
                    issue._id === issueId ? updatedIssue : issue
                ).sort((a, b) => {
                    const aVotes = (a.upvotes?.length || 0) - (a.downvotes?.length || 0);
                    const bVotes = (b.upvotes?.length || 0) - (b.downvotes?.length || 0);
                    return bVotes - aVotes; // Descending order
                });
                return { ...prevUserState, issues: updatedIssues };
            });
        } catch (error) {
            console.error("Error upvoting issue:", error);
        }
    }

    // Handle downvote
    async function handleDownvote(issueId) {
        try {
            const res = await userAxios.put(`/api/main/issues/downvotes/${issueId}`);
            const updatedIssue = res.data;
            setUserState(prevUserState => {
                const updatedIssues = prevUserState.issues.map(issue =>
                    issue._id === issueId ? updatedIssue : issue
                ).sort((a, b) => {
                    const aVotes = (a.upvotes?.length || 0) - (a.downvotes?.length || 0);
                    const bVotes = (b.upvotes?.length || 0) - (b.downvotes?.length || 0);
                    return bVotes - aVotes; // Descending order
                });
                return { ...prevUserState, issues: updatedIssues };
            });
        } catch (error) {
            console.error("Error downvoting issue:", error);
        }
    }

    // Add a comment
    async function addComment(newComment) {
        try {
            const res = await userAxios.post('/api/main/comments', newComment);
            return res.data;
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    }

    async function getCommentsByIssue(issueId) {
        try {
            const res = await userAxios.get(`/api/main/comments/issue/${issueId}`);
            return res.data.map(comment => ({
                ...comment,
                user: comment.user || { username: 'Unknown' } // Ensure user object is included
            }));
        } catch (error) {
            console.error("Error fetching comments by issue:", error);
        }
    }



    // Delete a comment
    const deleteComment = async (commentId, issueId) => {
        try {
            await userAxios.delete(`/api/main/comments/${commentId}`);
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue =>
                    issue._id === issueId
                        ? { ...issue, comments: issue.comments.filter(comment => comment._id !== commentId) }
                        : issue
                )
            }));
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    const editComment = async (commentId, issueId, updatedContent) => {
        try {
            console.log('Updating comment:', { commentId, issueId, updatedContent });
            const res = await userAxios.put(`/api/main/comments/${commentId}`, { content: updatedContent });
            console.log('Response data:', res.data);
            
            setUserState(prevState => {
                const updatedIssues = (prevState.issues || []).map(issue =>
                    issue._id === issueId
                        ? {
                            ...issue,
                            comments: (issue.comments || []).map(comment =>
                                comment._id === commentId
                                    ? { ...comment, content: res.data.content }
                                    : comment
                            )
                        }
                        : issue
                );
                console.log('Updated issues state:', updatedIssues);
                return { ...prevState, issues: updatedIssues };
            });
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };
    
    

    // Get issue by ID
    async function getIssueById(issueId) {
        try {
            const res = await userAxios.get(`/api/main/issues/${issueId}`);
            return res.data;
        } catch (error) {
            console.error("Error fetching issue by ID:", error);
        }
    }
    async function getUserById(userId) {
        try {
            const res = await userAxios.get(`/api/main/users/${userId}`);
            return res.data;
        } catch (error) {
            console.error("Error fetching user by ID:", error);
        }
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr,
                getUserIssues,
                getAllIssues,
                addIssue,
                editIssue,
                deleteIssue,
                handleUpvote,
                handleDownvote,
                addComment,
                getCommentsByIssue,
                getUserById,
                getIssueById,
                deleteComment,
                editComment
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
