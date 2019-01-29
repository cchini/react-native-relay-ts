import { createStackNavigator } from 'react-navigation'
import TabBarTop from '../TabBarTop/TabBarTop'
import Home from '../../screens/Home/Home'

const HomeScreen = TabBarTop('dark')(Home)

export default createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
)