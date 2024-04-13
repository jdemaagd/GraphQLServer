const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config.env' });

const schema = require('./schema/schema');

const port = process.env.PORT || 4000;
const app = express();

const DB = process.env.MONGO_DB.replace(
    '<PASSWORD>',
    process.env.MONGO_DB_PASSWORD
);
console.log(`Mongo Atlas DB URI: ${DB}`);
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(port, () => {
    console.log(`App running on PORT: ${port}...`);
});
