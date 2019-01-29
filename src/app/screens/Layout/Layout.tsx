import React from 'react'
import { View, Text } from 'react-native'
import { QueryRenderer, graphql } from 'react-relay'
import styles from './Layout.styles'
import Icon from '../../components/Icon/Icon'
import Button from '../../components/Button/Button'
import CreatePostMutation from '../../mutations/Posts/CreatePostMutation'
import environment from '../../../enviroment/graphRelay'

const LayoutViewerQuery = graphql`
  query LayoutViewerQuery {
    viewer {
      id
    }
  }
`
type layoutQueryVariables = {}
type layoutQueryResponse = {
    viewer: ({
      id: string
    }) | null;
}
type layoutQuery = {
     response: layoutQueryResponse;
     variables: layoutQueryVariables;
}

const Layout  = <P extends object>(Component?: React.ComponentType<P>) =>
  class ScreenReturn extends React.Component<P> {

    state = {
      description: 'otro freddie',
      imageUrl: 'https://i.pinimg.com/originals/28/49/f2/2849f2fa0f8f7c6c360077e4b1206f58.jpg',
    }

    _handlePost = (viewerId: string) => {
      const {description, imageUrl} = this.state
      const post = {
        description,
        imageUrl,
        callback: () => console.log('x post'),
        viewerId,
      }
      CreatePostMutation(post)
    }

    render() {
      return (
        <QueryRenderer<layoutQuery>
        environment={environment}
        variables={{}}
        query={LayoutViewerQuery}
        render={({error, props}) => {
          if (error) {
            return (
              <View><Text>{error.message}</Text></View>
            )
          } else if (props) {
            console.log(props)
            return (
              <View style={styles.container}>
                <View style={styles.content} >
                  <View style={styles.containerLogo} >
                    <Icon />
                  </View>
                  <View style={styles.contentImages} >
                    <Component {...this.props} />
                  </View>
                  <View style={styles.contentFooter} >
                    <Button
                      onPress={() => this._handlePost(props.viewer.id)}
                    >
                      <Text>add</Text>
                    </Button>
                  </View>
                </View>
              </View>
            )
          }
          return (<Text>loading</Text>)
        }}
      />

      )
    }
  }

export default Layout