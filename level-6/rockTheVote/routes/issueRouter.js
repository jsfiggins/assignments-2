const express = require("express");
const Issue = require('../models/issue');
const issueRouter = express.Router();

// Post request to create a new issue
issueRouter.post('/', async (req, res, next) => {
    try {
        req.body.username = req.auth.username;
        req.body.userId = req.auth._id; // Id of the logged in user
        const issue = new Issue(req.body);
        const savedIssue = await issue.save();
        return res.status(201).send(savedIssue);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// Get request for logged-in user issues
issueRouter.get('/user', async (req, res, next) => {
    try {
        const foundIssues = await Issue.find({ userId: req.auth._id });
        return res.status(200).send(foundIssues);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Get all issues
issueRouter.get('/all', async (req, res, next) => {
    try {
        const allIssues = await Issue.find();
        return res.status(200).send(allIssues);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});
// Get an issue by ID
issueRouter.get('/:issueId', async (req, res, next) => {
    try {
        const issue = await Issue.findById(req.params.issueId);
        if (!issue) {
            return res.status(404).send({ message: 'Issue not found' });
        }
        return res.status(200).send(issue);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});



// Put request to edit an issue
issueRouter.put('/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findOneAndUpdate(
            { _id: req.params.issueId, userId: req.auth._id },
            req.body,
            { new: true }
        );
        if (!updatedIssue) {
            res.status(404);
            return next(new Error("Issue not found or authorized"));
        }
        return res.status(200).send(updatedIssue);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Delete request to remove an issue
issueRouter.delete('/:issueId', async (req, res, next) => {
    try {
        const deletedIssue = await Issue.findOneAndDelete(
            { _id: req.params.issueId, userId: req.auth._id }
        );
        if (!deletedIssue) {
            return next(new Error('Issue not found or permitted'));
        }
        return res.status(200).send({ message: 'Issue deleted successfully' });
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Upvote an issue
issueRouter.put('/upvotes/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: { upvotes: req.auth._id },
                $pull: { downvotes: req.auth._id }
            },
            { new: true } // Return the updated issue
        );
        if (!updatedIssue) {
            return res.status(404).send({ message: "Issue not found" });
        }
        return res.status(200).send(updatedIssue);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

// Downvote an issue
issueRouter.put('/downvotes/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: { downvotes: req.auth._id },
                $pull: { upvotes: req.auth._id }
            },
            { new: true } // Return the updated issue
        );
        if (!updatedIssue) {
            return res.status(404).send({ message: "Issue not found" });
        }
        return res.status(200).send(updatedIssue);
    } catch (error) {
        res.status(500);
        return next(error);
    }
});

module.exports = issueRouter;
