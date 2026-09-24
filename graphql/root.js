const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Query {
    Name: String
    Email: String
    RollNo: Int
    }
`);
const root = {
    Name: () => { //or just write hello: () => 'Hello' ;
        return 'raju';
    },
    Email: () => {
        return 'raju@845@gmail.com';
    },
    RollNo: () => {
        return 20;
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000/graphql');
});