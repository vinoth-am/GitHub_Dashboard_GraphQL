import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import "bootstrap/dist/css/bootstrap.min.css";

const cache = new InMemoryCache();

const URL = "https://api.github.com/graphql";
const token = "";

const httpLink = new HttpLink({
  uri: URL,
  headers: {
    authorization: `Bearer ${token}`
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache
});

class Apps extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Apps />, document.getElementById("root"));

serviceWorker.unregister();
