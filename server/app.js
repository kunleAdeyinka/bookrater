const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const keys = require("./config/keys");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origing request
app.use(cors());

//connect to mlab db
mongoose.connect(keys.mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

//middleware for graphql
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening for requests on port 4000');
});