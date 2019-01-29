import { StyleSheet } from 'react-native'

const stylesLayout = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  content: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '95%',
  },
  containerLogo: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '95%',
    height: '8%',
  },
  contentImages: {
    flexGrow: 1,
    marginTop: '2%',
    width: '100%',
    height: '70%',
    backgroundColor: '#F3F3F3',
    borderColor: '#979797',
    borderRadius: 6,
    borderWidth: 1,
    borderBottomWidth: 0,
    shadowColor: 'rgba(0,0,0,0.50)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  contentFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:  '15%',
  },
})

export default stylesLayout
