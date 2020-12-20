const graphql = require('graphql');
const _ = require('lodash');
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID
} = graphql;

//Dummy Data
const students = [
    { id: "1", name: "Mark Jayson B. Morilla", course: "BSCpE", year: '4th year' },
    { id: "2", name: "Ellen Joyce T. Arcenal", course: "BSCpE", year: '4th year' },
    { id: "3", name: "Genalyn Luterte", course: "BSECE", year: '4th year' }
]


const StudentType = new GraphQLObjectType({
    name: "Students",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        course: { type: GraphQLString },
        year: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "Root",
    fields: {
        Student: {
            type: StudentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return _.find(students, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})