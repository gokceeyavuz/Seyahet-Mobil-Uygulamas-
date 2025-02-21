import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import style from './style';
import icons from '../../assets/icons';
import {Images} from '../../assets';

const index = () => {
  return (
    <View>
      <View>
        <Image style={style.Imagess} source={icons.turuncuBisiklet3}></Image>
      </View>
      <ScrollView>
        <View style={style.alan2}>
          <Text style={style.text1}>Categories</Text>
          <View style={style.categories1}>
            <TouchableOpacity style={style.categoriesKupa}>
              <Image style={style.kupaImage} source={icons.trophy}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={style.categoriesAtes1}>
              <Image style={style.kupaImage} source={icons.hot}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={style.categorieskalp}>
              <Image style={style.heartImage} source={icons.hearrtt}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={style.categoriesparfmm}>
              <Image style={style.kupaImage} source={icons.perfume}></Image>
            </TouchableOpacity>
          </View>
          <View style={style.alan3}>
            <Text style={style.text1}>Skin Type</Text>
            <View style={style.alan3Categories}>
              <TouchableOpacity style={style.normalSkin}>
                <Image style={style.kupaImage} source={icons.dryskin}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={style.categoriesparfmm}>
                <Image style={style.kupaImage} source={icons.skincare}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={style.categoriesAtes1}>
                <Image style={style.kupaImage} source={icons.oily}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={style.categorieskalp}>
                <Image style={style.kupaImage} source={icons.clean}></Image>
              </TouchableOpacity>
            </View>
          </View>
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
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
