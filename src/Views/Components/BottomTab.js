import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import commonstyles from '../Screens/css';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import {
  homeiconImage,
  profileiconImage,
  messageiconImage,
  carticonImage,
} from '../../Assets/Images';

const tabs = {
  tabs: [
    {
      title: 'Home',
      icon: homeiconImage,
      tab: {
        title: 'Home',
        icon: homeiconImage,
      },
    },
    {
      title: 'Message',
      icon: messageiconImage,
      tab: {
        title: 'Message',
        icon: messageiconImage,
      },
    },
    {
      title: 'Cart',
      icon: carticonImage,
      tab: {
        title: 'Cart',
        icon: carticonImage,
      },
    },
    {
      title: 'Profile',
      icon: profileiconImage,
      tab: {
        title: 'Profile',
        icon: profileiconImage,
      },
    },
  ],
};

const BottomTab = ({onPress, focused}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          padding: 2,
        }}>
        {tabs.tabs.map((tab, index) => {
          return (
            <Button
              key={index}
              source={tab.icon}
              style={[
                focused == tab.tab.title && {backgroundColor: '#fff'},
                {height: 60, width: 90},
              ]}
              textStyle={focused == tab.title && {color: '#000'}}
              name={tab.title}
              onPress={() => {
                navigation.navigate(tab.title);
              }}
            />
          );
        })}
        {/* <Button
          source={homeiconImage}
          style={[
            focused == 'Home' && {backgroundColor: '#fff'},
            {height: 60, width: 80},
          ]}
          textStyle={focused == 'Home' && {color: '#000'}}
          name="Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Button
          source={messageiconImage}
          style={[
            focused == 'Message' && {backgroundColor: '#fff'},
            {height: 60, width: 90},
          ]}
          textStyle={focused == 'Message' && {color: '#000'}}
          name="Message"
          onPress={() => {
            navigation.navigate('Message');
          }}
        />

        <Button
          source={carticonImage}
          style={[
            focused == 'Cart' && {backgroundColor: '#fff'},
            {height: 60, width: 80},
          ]}
          textStyle={focused == 'Cart' && {color: '#000'}}
          name="Cart"
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />

        <Button
          source={profileiconImage}
          style={[
            focused == 'Profile' && {backgroundColor: '#fff'},
            {height: 60, width: 80},
          ]}
          textStyle={focused == 'Profile' && {color: '#000'}}
          name="Profile"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        /> */}
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
