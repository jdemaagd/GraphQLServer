const graphql = require('graphql');

const User = require('../model/user');
const Hobby = require('../model/hobby');
const Post = require('../model/post');

const {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Documentation for user...',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        profession: {type: GraphQLString},
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({userId: parent.id});
            }
        },
        hobbies: {
            type: new GraphQLList(HobbyType),
            resolve(parent, args) {
                return Hobby.find({userId: parent.id});
            }
        }
    })
});

const HobbyType = new GraphQLObjectType({
    name: 'Hobby',
    description: 'Hobby description',
    fields: () => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        description: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            }
        }
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post description',
    fields: () => ({
        id: {type: GraphQLString},
        comment: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            }
        }
    })
});

module.exports = {
    UserType,
    HobbyType,
    PostType
};