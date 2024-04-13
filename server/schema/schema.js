const graphql = require('graphql');
const _ = require('lodash');
const User = require('../model/user');
const Hobby = require('../model/hobby');
const Post = require('../model/post');

const {
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} = graphql;

const {
    UserType,
    HobbyType,
    PostType
} = require('./type');

// const {
//     usersData,
//     hobbiesData,
//     postsData
// } = require('../model/mock');

const { Mutation } = require('./mutation');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // return _.find(usersData, {id: args.id});
                return User.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                // return usersData;
                return User.find({});
            }
        },
        hobby: {
            type: HobbyType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // return _.find(hobbiesData, {id: args.id});
                return Hobby.findById(args.id);
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve(parent, args) {
                // console.log("Hello World Hobbies! " + parent.userId);
                // return hobbiesData;
                return Hobby.find({id: args.userId});
            }
        },
        post: {
            type: PostType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // return _.find(postsData, {id: args.id});
                return Post.findById(args.id);
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                // return postsData;
                return Post.find({});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
