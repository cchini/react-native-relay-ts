import React from 'react'
import { View, Text } from 'react-native'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import Layout from '../Layout/Layout'

function fetchQuery(
  operation: any,
  variables: any,
) {
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
    return response.json()
  })
}

const network = Network.create(fetchQuery)

const source = new RecordSource()
const store = new Store(source)

const enviroment =  new Environment({
  network,
  store,
})

const HomeAllPostQuery = graphql`
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
`
// Types
type HomePost_viewer = {
  allPosts: ({
      readonly edges: ReadonlyArray<({
          readonly node: ({
              readonly id: string;
              readonly description: string | null;
              readonly imageUrl: string | null;
          }) | null;
      }) | null> | null;
  }) | null;
};
type appQueryVariables = {};
type appQueryResponse = {
    readonly viewer: ({
        readonly : HomePost_viewer;
    }) | null;
}
type appQuery = {
    readonly response: appQueryResponse;
    readonly variables: appQueryVariables;
}

class Home extends React.Component {

  render() {
    return (
      <View>
        <QueryRenderer<appQuery>
          environment={enviroment}
          query={HomeAllPostQuery}
          variables={{}}
          render={({error, props}) => {
            props?console.log(props.viewer) : console.log('este es el null')
            if (error) {
              return <Text>{error.message}</Text>
            } else if (props) {
              return <Text>Text App</Text>
            }
            return <Text>Loading</Text>
          }}
        />
      </View>
    )
  }
}

export default Layout(Home)
