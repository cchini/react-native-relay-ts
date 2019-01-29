import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    height: 200,
    width: 500,
  },
  item: {
    justifyContent: 'space-around',
    flexDirection: 'column',
    marginTop: 20,
    // backgroundColor:'orange',
  },
})

export default styles