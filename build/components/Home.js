import React from 'react';
import { View, Text } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store, } from 'relay-runtime';
function fetchQuery(operation, variables) {
    return fetch('https://api.graph.cool/relay/v1/cjrc7hykq6xrj0158i0v2smcy', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}
const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);
const enviroment = new Environment({
    network,
    store,
});
const HomeAllPostQuery = graphql `
  query HomeAllPostQuery {
    viewer {
      allPosts(last: 100, orderBy: createdAt_DESC){
      edges {
        node {
          id
          description
          imageUrl
        }
      }
    }
    }
  }
`;
export default class Home extends React.Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(QueryRenderer, { environment: enviroment, query: HomeAllPostQuery, variables: {}, render: ({ error, props }) => {
                    console.log(props);
                    if (error) {
                        return React.createElement(Text, null, error.message);
                    }
                    else if (props) {
                        return React.createElement(Text, null, "Text App");
                    }
                    return React.createElement(Text, null, "Loading");
                } })));
    }
}
/*
query HomeAllPostQuery {
    viewer {
      allPosts(last: 100, orderBy: createdAt_DESC){
      edges {
        node {
          id
          description
          imageUrl
        }
      }
    }
    }
  }
*/ 
//# sourceMappingURL=Home.js.map