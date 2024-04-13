const graphql = require('graphql');
const User = require('../model/user');
const Hobby = require('../model/hobby');
const Post = require('../model/post');

const {
    UserType,
    HobbyType,
    PostType
} = require('./type');

const {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} = graphql;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        CreateUser: {
            type: UserType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
                profession: {type: GraphQLString}
            },
            resolve(parent, args) {
                let user = new User({
                    name: args.name,
                    age: args.age,
                    profession: args.profession
                });
                return user.save();
            }
        },
        UpdateUser: {
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: GraphQLInt},
                profession: {type: GraphQLString}
            },
            resolve(parent, args) {
                let updatedUser = User.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            age: args.age,
                            profession: args.profession
                        }
                    },
                    {new: true} // NOTE: return updated document or old document
                )
                return updatedUser;
            }
        },
        RemoveUser: {
            type: UserType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let removedUser = User.findByIdAndDelete(
                    args.id
                ).exec();
                if (!removedUser) {
                    console.log('ERROR: Removing User!')
                }
                return removedUser;
            }
        },
        CreatePost: {
            type: PostType,
            args: {
                comment: {type: new GraphQLNonNull(GraphQLString)},
                userId: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let post = new Post({
                    comment: args.comment,
                    userId: args.userId
                });
                return post.save();
            }
        },
        UpdatePost: {
            type: PostType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                comment: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args) {
                let updatedPost = Post.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            comment: args.comment,
                        }
                    },
                    {new: true} // NOTE: return updated document or old document
                )
                return updatedPost;
            }
        },
        RemovePost: {
            type: PostType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let removedPost = Post.findByIdAndDelete(
                    args.id
                ).exec();
                if (!removedPost) {
                    console.log('ERROR: Removing POST!')
                }
                return removedPost;
            }
        },
        CreateHobby: {
            type: HobbyType,
            args: {
                title: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
                userId: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let hobby = new Hobby({
                    title: args.title,
                    description: args.description,
                    userId: args.userId
                });
                return hobby.save();
            }
        },
        UpdateHobby: {
            type: HobbyType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
                title: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let updatedHobby = Hobby.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            description: args.description
                        }
                    },
                    {new: true})    // NOTE: return updated document or old document
                return updatedHobby;
            }
        },
        RemoveHobby: {
            type: HobbyType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args) {
                let removedHobby = Hobby.findByIdAndDelete(
                    args.id
                ).exec();
                if (!removedHobby) {
                    console.log('ERROR: Removing HOBBY!')
                }
                return removedHobby;
            }
        }
    }
});

module.exports = {
    Mutation
};