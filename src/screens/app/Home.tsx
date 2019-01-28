import React from "react"
import { View, Text } from "react-native"
import Layout from './Layout/Layout'


class Home extends React.Component{

  render() {
    return (
      <View>
        <Text>hello home</Text>
      </View>
    )
  }
}

export default Layout(Home)
