import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';
import {Images} from '../../assets';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const index = () => {
  return (
    <View>
      <View>
        <Image style={style.imageBisiklet} source={Images.bisiklet2}></Image>
        <ScrollView>
          <View style={style.alan2}>
            <View style={style.gruop1}>
              <View style={style.group12}>
                <View style={style.dairegroup1}></View>
                <View>
                  <Text style={style.group12Text}>Amelia Nelson</Text>
                  <Text style={style.group12Text2}>20 min ago</Text>
                </View>
              </View>
              <View style={style.groupImage}>
                <Image style={style.Image1} source={Images.serum2}></Image>
              </View>
            </View>
            <View style={style.groupImage2}>
              <View style={style.group12}>
                <View style={style.dairegroup1}></View>
                <View>
                  <Text style={style.group12Text}>John Doe</Text>
                  <Text style={style.group12Text2}>1 hour ago</Text>
                </View>
              </View>
              <View>
                <Text style={style.group2Text}>
                  İt is a long established fact that a reader will be distracted
                  by the readable content of a page when lookinf at its layout
                </Text>
              </View>
            </View>
            <View style={style.gruop1}>
              <View style={style.group12}>
                <View style={style.dairegroup1}></View>
                <View>
                  <Text style={style.group12Text}>Samantha Martin</Text>
                  <Text style={style.group12Text2}>5 June,2019</Text>
                </View>
              </View>
              <View style={style.groupImage1}>
                <View>
                  <Image style={style.group3Image1} source={icons.krem}></Image>
                </View>
                <View>
                  <Image style={style.group3Image2} source={Images.ruj}></Image>
                  <Image
                    style={style.group3Image2}
                    source={Images.serum2 }></Image>
                </View>
                <Image style={style.group3Image2} source={Images.krem}></Image>
              </View>
            </View>
            <View style={style.groupImage2}>
              <View style={style.group12}>
                <View style={style.dairegroup1}></View>
                <View>
                  <Text style={style.group12Text}>Jack Martin</Text>
                  <Text style={style.group12Text2}>1 hour ago</Text>
                </View>
              </View>
              <View>
                <Text style={style.group2Text}>
                  İt is a long established fact that a reader will be distracted
                  by the readable content of a page when lookinf at its layout
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
