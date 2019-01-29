import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import {RELAY_API} from 'react-native-dotenv'

function fetchQuery(
  operation: any,
  variables: any
) {
  return fetch(RELAY_API, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
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

export default enviroment
