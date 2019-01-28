import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import SwitchNavigator from './SwitchNavigator/SwitchNavigator'

export default createAppContainer(createSwitchNavigator(
  {
    App: SwitchNavigator,
  },
  {
    initialRouteName: 'App',
  }
))
