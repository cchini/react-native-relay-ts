import React from 'react'
import { View,TouchableWithoutFeedback,Keyboard } from 'react-native'
import styles from './Layout.styles'

const Layout  = <P extends object>(Component? : React.ComponentType<P>) =>
  class ScreenReturn extends React.Component<P> {

    onPressTouch = () => Keyboard.dismiss()

    render() {
      return (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.onPressTouch}>
            <Component {...this.props} />
          </TouchableWithoutFeedback>
        </View>
      )
    }
  }

export default Layout
