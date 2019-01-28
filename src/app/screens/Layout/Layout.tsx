import React from 'react'
import { View,TouchableWithoutFeedback,Keyboard } from 'react-native'
import styles from './Layout.styles'
import Icon from '../../components/Icon/Icon'

const Layout  = <P extends object>(Component? : React.ComponentType<P>) =>
  class ScreenReturn extends React.Component<P> {

    private onPressTouch = () => Keyboard.dismiss()

    render() {
      return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.onPressTouch}>
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
          </TouchableWithoutFeedback>
        </View>
      )
    }
  }

export default Layout


