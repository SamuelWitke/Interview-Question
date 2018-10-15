const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express(); 
app.use(express.static(__dirname + '/public'));

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const ants = [
	{
		"name": "Marie ‘Ant’oinette",
		"weight": 2,
		"color": "BLACK",
		"length": 12
	},
	{
		"name": "Flamin’ Pincers",
		"weight": 2,
		"color": "RED",
		"length": 11
	},
	{
		"name": "Big Susan",
		"weight": 5,
		"color": "BLACK",
		"length": 20
	},
	{
		"name": "The Unbeareable Lightness of Being",
		"weight": 1,
		"color": "SILVER",
		"length": 5
	},
	{
		"name": "‘The Duke’",
		"weight": 3,
		"color": "RED",
		"length": 17
	}
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
# Comments in GraphQL are defined with the hash (#) symbol.
	enum AntColor {
		BLACK
		RED
		SILVER
	}

# This "Ant" type can be used in other type declarations.
	type Ant {
		name: String
		length: Int 
		color: AntColor
		weight: Int
	}

# The "Query" type is the root of all GraphQL queries.
	# (A "Mutation" type will be covered later on.)
type Query {
	ants: [Ant]
}
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
	Query: {
		ants: () => ants,
	},
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app }); // app is from an existing express app


// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
const PORT = process.env.PORT || 4000;

app.listen({ port: PORT}, () =>
	console.log(`🚀 Server ready at  ${server.graphqlPath}`)
)
