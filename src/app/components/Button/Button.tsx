import React, {ReactNode} from 'react'
import { TouchableOpacity } from 'react-native'
import stylesButton from './Button.styles'

interface Props {
  onPress?: any
  children?: ReactNode
}

const Button = (props: Props) => {
  const { children } = props
  return (
    <TouchableOpacity
      {...props}
      style={[stylesButton.base, stylesButton.accent]}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Button
