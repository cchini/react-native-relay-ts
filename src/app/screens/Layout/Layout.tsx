import React from 'react'
import { View } from 'react-native'
import styles from './Layout.styles'
import Icon from '../../components/Icon/Icon'

const Layout  = <P extends object>(Component? : React.ComponentType<P>) =>
  class ScreenReturn extends React.Component<P> {
    render() {
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
              <Icon />
            </View>
            </View>
        </View>
      )
    }
  }

export default Layout


