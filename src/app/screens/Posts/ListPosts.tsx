import React from 'react'
import { Image,ScrollView,View, Text } from 'react-native'
import { Props, Node } from './Posts.types'
import styles from './Posts.styles'

class ListPosts extends React.Component<Props> {
  render () {
    const { viewer } = this.props
    return (
      <ScrollView
        scrollEnabled
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator
      >
        {viewer.allPosts.edges.map(({node}: Node) =>
        <View
          key={node.id}
          style={styles.item}
        >
            <Image
              source={{uri: node.imageUrl}}
              style={styles.image}
            />
            <Text>Test</Text>
        </View>
        )}
      </ScrollView>
    )
  }
}



export default ListPosts