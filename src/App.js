import React from "react";
import { Query } from "react-apollo";
import { GET_PINNED_REPOS, GET_REPOS } from "./shared/GQL";
import Home from "./view/Home";

class App extends React.Component {
  render() {
    return (
      <Query query={GET_PINNED_REPOS}>
        {({ data: pinnedRepos, error: pinnedError }) => {
          return (
            <Query query={GET_REPOS}>
              {({ data: repos, error: repoError }) => {
                return (
                  <Home
                    pinnedRepos={pinnedRepos}
                    repos={repos}
                    pinnedError={pinnedError}
                    repoError={repoError}
                  />
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}
export default App;
