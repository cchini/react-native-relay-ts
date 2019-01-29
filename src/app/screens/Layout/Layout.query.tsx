import {
  graphql
} from 'react-relay'

const LayoutViewerQuery = graphql`
  query LayoutViewerQuery {
    viewer {
      id
    }
  }
`

export {
  LayoutViewerQuery,
}
