import {
  graphql
} from 'react-relay'

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

export {
  HomeAllPostQuery
}
