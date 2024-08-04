const express = require('express');
const Comment = require('../models/comment');
const commentRouter = express.Router();

// Creates a new comment 
commentRouter.post('/', async (req, res, next) => {
    try {
        req.body.userId = req.auth._id;
        const comment = new Comment(req.body);
        const savedComment = await comment.save();
        return res.status(201).send(savedComment);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Get comments for a specific issue 
commentRouter.get('/issue/:issueId', async (req, res, next) => {
    try {
        const comments = await Comment.find({ issueId: req.params.issueId }).populate('userId', 'username');
        return res.status(200).send(comments);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Updates a comment 
commentRouter.put('/:commentId', async (req, res, next) => {
    try {
        const updatedComment = await Comment.findOneAndUpdate(
            { _id: req.params.commentId, userId: req.auth._id },
            req.body,
            { new: true }
        );
        if (!updatedComment) {
            res.status(404);
            return next(new Error('Comment not found or authorized'));
        }
        return res.status(201).send(updatedComment);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Deletes a comment 
commentRouter.delete('/:commentId', async (req, res, next) => {
    try {
        const deletedComment = await Comment.findOneAndDelete({ _id: req.params.commentId, userId: req.auth._id });
        if (!deletedComment) {
            res.status(404);
            return next(new Error('Comment not found or authorized'));
        }
        return res.status(200).send(deletedComment);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

module.exports = commentRouter;
