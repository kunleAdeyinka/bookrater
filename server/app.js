const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origing request
app.use(cors());

//connect to mlab db
mongoose.connect('mongodb://admin:admin007@ds115472.mlab.com:15472/gql-bookrater');
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