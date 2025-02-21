import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import icons from '../../assets/icons';
import style from './style';
import images from '../../assets/images';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const index = () => {
  return (
    <View>
      <View>
        <Image source={icons.bisiklet} style={style.imageBisiklet}></Image>
      </View>
      <View style={style.alan2}>
        <Text style={style.alan2Text1}>Featured Products</Text>
        <ScrollView>
          <ScrollView horizontal={true}>
            <View style={style.scroolGrup1}>
              <View style={style.scrollGrup1alan1}>
                <View style={style.user1}></View>
                <View style={style.group2}>
                  <Text style={style.alan1Text}>Amelia Nelson</Text>
                  <Text style={style.alan1Text2}>Actress</Text>
                </View>
              </View>
              <View>
                <Image
                  style={style.scrollGrup1alan2}
                  source={icons.krem}></Image>
              </View>
            </View>
            <View style={style.scroolGrup1}>
              <View style={style.scrollGrup1alan1}>
                <View style={style.user1}></View>
                <View style={style.group2}>
                  <Text style={style.alan1Text}>Amelia Nelson</Text>
                  <Text style={style.alan1Text2}>Actress</Text>
                </View>
              </View>
              <View>
                <Image
                  style={style.serum2imagess}
                  source={images.serum2}></Image>
              </View>
            </View>
            <View style={style.scroolGrup1}>
              <View style={style.scrollGrup1alan1}>
                <View style={style.user1}></View>
                <View style={style.group2}>
                  <Text style={style.alan1Text}>Amelia Nelson</Text>
                  <Text style={style.alan1Text2}>Actress</Text>
                </View>
              </View>
              <View>
                <Image style={style.imagesRuj} source={images.ruj}></Image>
              </View>
            </View>
          </ScrollView>
          <View>
            <Text style={style.alan2Text1}>Popular Product</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={style.scroolGrup1}>
              <View style={style.scrollGrup1alan1}>
                <View style={style.user1}></View>
                <View style={style.group2}>
                  <Text style={style.alan1Text}>Amelia Nelson</Text>
                  <Text style={style.alan1Text2}>Actress</Text>
                </View>
              </View>
              <View>
                <Image
                  style={style.scrollGrup1alan2}
                  source={icons.krem}></Image>
              </View>
            </View>
            <View style={style.scroolGrup1}>
              <View style={style.scrollGrup1alan1}>
                <View style={style.user1}></View>
                <View style={style.group2}>
                  <Text style={style.alan1Text}>Amelia Nelson</Text>
                  <Text style={style.alan1Text2}>Actress</Text>
                </View>
              </View>
              <View>
                <Image
                  style={style.serum2imagess}
                  source={images.serum2}></Image>
              </View>
            </View>
            <View style={style.scroolGrup1}>
              <View style={style.scrollGrup1alan1}>
                <View style={style.user1}></View>
                <View style={style.group2}>
                  <Text style={style.alan1Text}>Amelia Nelson</Text>
                  <Text style={style.alan1Text2}>Actress</Text>
                </View>
              </View>
              <View>
                <Image style={style.imagesRuj} source={images.ruj}></Image>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
};
export default index;

const styles = StyleSheet.create({});
