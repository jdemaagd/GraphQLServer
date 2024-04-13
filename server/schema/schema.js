const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLSchema,
    GraphQLList
} = graphql;

const {
    UserType,
    HobbyType,
    PostType
} = require('./type');

const {
    usersData,
    hobbiesData,
    postsData
} = require('../model/mock');

const { Mutation } = require('./mutation');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(usersData, {id: args.id});
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return usersData;
            }
        },
        hobby: {
            type: HobbyType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(hobbiesData, {id: args.id});
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve(parent, args) {
                // console.log("Hello World Hobbies! " + parent.userId);
                return hobbiesData;
            }
        },
        post: {
            type: PostType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(postsData, {id: args.id});
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return postsData;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
