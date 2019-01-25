import React from "react"
import { Text, View } from "react-native"

export interface Props {
  name: string
  enthusiasmLevel?: number
}

interface State {
  enthusiasmLevel: number
}

export default class Hello extends React.Component<Props, State> {

  render() {
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    )
  }
}

