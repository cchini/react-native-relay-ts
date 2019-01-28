import { StyleSheet } from 'react-native'

const stylesLayout = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width:'90%',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft:'5%',
    marginRight:'5%'
  },
  containerLogo: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '90%',
    height:'10%',
  },
  contentImages: {
    alignItems: 'center',
    width: '95%',
    height:'80%',
    backgroundColor: '#F3F3F3',
    borderColor: '#979797',
    borderRadius: 8,
    borderWidth: 1,
    borderBottomWidth: 0,
    shadowColor: 'rgba(0,0,0,0.50)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  contentFooter: {
    alignItems: 'center',
    width: '90%',
    height:'10%',
  },
})

export default stylesLayout
