import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://broast.lndo.site/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;
