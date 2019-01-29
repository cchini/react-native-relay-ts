import React from 'react'
import { Text } from 'react-native'
import {QueryRenderer} from 'react-relay'
import Layout from '../Layout/Layout'
import ListPost from '../Posts/ListPosts'
import {appQuery} from './Home.types'
import {HomeAllPostQuery} from './Home.query'
import enviroment from '../../enviroment/graphRelay'

class Home extends React.Component {
  render() {
    return (
      <QueryRenderer<appQuery>
        environment={enviroment}
        query={HomeAllPostQuery}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <Text>{error.message}</Text>
          } else if (props) {
            return <ListPost viewer={props.viewer} />
          }
          return <Text>Loading</Text>
        }}
      />
    )
  }
}

export default Layout(Home)
