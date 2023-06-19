import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  optionImage,
  profileImage,
  LFlogoImage,
  searchImage,
} from '../../../Assets/Images';
import commonStyles from '../css';
import Button from '../../Components/Button';

const HomeTopComponent = ({onChange}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 10,
        }}>
        <Image source={LFlogoImage} style={{height: 40, width: 60}} />

        <TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ea490c'}}>
            Lime Fashion
          </Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity>
            <Image source={profileImage} style={{height: 40, width: 40}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View
          style={[
            styles.input,
            {flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10},
          ]}>
          <TextInput
            placeholder="Search"
            style={{flex: 1}}
            onChangeText={onChange}
          />
          <TouchableOpacity>
            <Image source={searchImage} style={{height: 30, width: 30}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={optionImage}
            style={{height: 40, width: 40, margin: 6}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeTopComponent;

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    // backgroundColor: 'rgba(128,128,128,.6)',
    borderColor: 'grey',
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 30,
    width: 300,
    height: 50,
  },
});
