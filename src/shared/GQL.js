import gql from "graphql-tag";
const GET_PINNED_REPOS = gql`
  {
    repositoryOwner(login: "airbnb") {
      ... on ProfileOwner {
        itemShowcase {
          items(first: 100) {
            totalCount
            edges {
              node {
                ... on Repository {
                  primaryLanguage {
                    name
                  }
                  name
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    }
  }
`;
const GET_REPOS = gql`
  {
    search(query: "airbnb", type: REPOSITORY, first: 50) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            primaryLanguage {
              name
            }
            name
            description
            stargazers {
              totalCount
            }
            forkCount
          }
        }
      }
    }
  }
`;

export { GET_PINNED_REPOS, GET_REPOS };
