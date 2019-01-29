import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
    alignItems:'center',
  },
  image:{
    resizeMode:'contain',
    height: 200,
    width: 500,
  },
  item:{
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginTop:20,
    // backgroundColor:'orange',
  }
})

export default styles