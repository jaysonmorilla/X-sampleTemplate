const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/API', graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => { console.log('Listening at PORT:4000') });