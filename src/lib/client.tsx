import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";



const httpLink = new HttpLink({
    uri: "http://localhost:1337/graphql",
    credentials: "same-origin"
})

const client = new ApolloClient({
    link: httpLink, 
    cache: new InMemoryCache()
})

export default client;