const graphql = require('graphql');
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

const { Mutation } = require('./mutation');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return User.find({});
            }
        },
        hobby: {
            type: HobbyType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                return Hobby.findById(args.id);
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve(parent, args) {
                return Hobby.find({id: args.userId});
            }
        },
        post: {
            type: PostType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                return Post.findById(args.id);
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return Post.find({});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
