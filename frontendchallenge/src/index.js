import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { createStore,  applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ReduxCache, } from 'apollo-cache-redux';
import { rootReducer } from './reducers';
import logger from 'redux-logger';
import App from './App';


// Redux Store Setup
const store = createStore(
  rootReducer,
  {},// Inital State
  compose(
    applyMiddleware(logger),
    // If you are using the devToolsExtension, you can add it here also
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
)
);

// Apollo Client Setup
const cache = new ReduxCache({ store });
const URL = 'https://graphql-ants.herokuapp.com/graphql';

const httpLink = new HttpLink({
  uri: URL,
 
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

