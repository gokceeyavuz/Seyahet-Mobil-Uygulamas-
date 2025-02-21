import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBisiklet: {
    width: windowWidth,
    height: windowWidth * 0.6,
  },
  alan2: {
    backgroundColor: 'white',
    width: windowWidth * 1,
    height: windowHeight * 0.9,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  alan2Text1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 15,
  },
  scroolGrup1: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.6,
    backgroundColor: '#F4F7F6',
    borderRadius: 15,
    marginLeft: 12,
  },
  scrollGrup1alan1: {
    flexDirection: 'row',
    gap: 10,
    margin: 5,
    marginBottom: 6,
  },
  user1: {
    padding: 12,
    width: 15,
    borderRadius: 47,
    backgroundColor: 'black',
  },
  alan1Text: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
  },
  group2: {},
  alan1Text2: {
    fontSize: 7,
    fontWeight: '400',
    color: 'black',
  },
  scrollGrup1alan2: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.6,
  },
  imagesRuj: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.5,
  },
  serum2imagess: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.5,
  },
  menüBar: {
    height: windowWidth * 0.7,
    backgroundColor: '#FFFFFF',
    width: windowWidth,
  },
  menüBaricons:{
    flexDirection:'row',
    gap:85,
     justifyContent:'center',
     alignItems:'center',
     marginTop:14,
  },
  menüicons:{
    width:25,
     height:25,
     tintColor:'grey',
  },
  plusIcon:{
    padding:23,
    width:37,
    borderRadius:24,
    backgroundColor:'#F38D10',
    marginBottom:34,
  }
  
});
