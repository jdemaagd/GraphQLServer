const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = require('./schema/schema');

const port = process.env.PORT || 4000;
const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(port, () => {
    console.log('Listening for requests on port 4000');
});
