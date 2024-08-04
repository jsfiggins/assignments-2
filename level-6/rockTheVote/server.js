const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const { expressjwt } = require('express-jwt');
require('dotenv').config();

app.use(express.json());
app.use(morgan('dev'));

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('SERVER Connected to DB');
    } catch (err) {
        console.log(err);
    }
}

connectToDb();

app.use('/api/auth', require('./routes/authRouter'));
app.use('/api/main', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }));
app.use('/api/main/issues', require('./routes/issueRouter'));
app.use('/api/main/comments', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }), require('./routes/commentRouter'));

app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({ errMsg: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
