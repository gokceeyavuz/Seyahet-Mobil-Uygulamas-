import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  imageBisiklet: {
    width: 410,
    height: 80,
  },
  alan2: {
    backgroundColor: 'white',
    width: windowWidth * 1,
    height: 810,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  gruop1: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.5,
    backgroundColor: '#F5F9FA',
    borderRadius: 20,
    marginLeft: 16,
    marginTop: 30,
  },
  group12: {
    flexDirection: 'row',
    gap: 18,
    margin: 10,
  },
  dairegroup1: {
    padding: 15,
    width: 15,
    borderRadius: 47,
    backgroundColor: 'grey',
  },
  group12Text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  group12Text2: {
    fontWeight: '300',
    fontSize: 10,
    color: 'black',
  },
  groupImage: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.3,
    backgroundColor: 'red',
    margin: 18,
    borderRadius: 20,
  },
  Image1: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.3,
    borderRadius: 20,
  },
  groupImage2: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.25,
    borderRadius: 20,
    backgroundColor: '#F5F9FA',
    margin: 10,
    marginLeft: 16,
  },
  group2Text: {
    fontWeight: '300',
    fontSize: 10,
    color: 'black',
    margin: 8,
    marginLeft: 16,
  },
  groupImage1: {
    flexDirection: 'row',
    gap: 10,
    margin: 10,
  },
  group3Image1: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.3,
    borderRadius: 12,
  },
  group3Image2: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.15,
    borderRadius: 8,
    margin :5
  },
  gruop3ImagesGruop2: {
    backgroundColor: 'black',
  },
});
