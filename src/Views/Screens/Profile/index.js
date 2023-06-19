import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import ProfileComponent from './ProfileComponent';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const profile = [
  {name: 'Full Name', description: 'Jack Will'},
  {name: 'Birthday', description: '1995-02-12'},
  {name: 'Gender', description: 'Male'},
  {
    name: 'Change Address',
    description: 'Satdobato, Lalitpur, Bagmati Province, Nepal',
  },
  {name: 'Change Username ', description: 'Jack12'},
  {name: 'Change Phone Number', description: '9812345678'},
  {name: 'Change Email', description: 'jack12@gmail.com'},
  {name: 'Change Password', description: 'Change Password'},
];

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'orange',
              margin: 20,
              alignSelf: 'center',
            }}>
            Account Information
          </Text>

          {profile.map((item, index) => {
            return (
              <ProfileComponent
                key={index}
                title={item?.name}
                description={item?.description}
              />
            );
          })}

          {/* <ProfileComponent title={'Full Name'} description={'Jack Will'} />
          <ProfileComponent title={'Birthday'} description={'1995-02-12'} />
          <ProfileComponent title={'Gender'} description={'Male'} />
          <ProfileComponent
            title={'Change Address'}
            description={'Satdobato, Lalitpur, Bagmati Province, Nepal'}
          />
          <ProfileComponent
            title={'Change Username'}
            description={'jack12@gmail.com'}
          />
          <ProfileComponent
            title={'Change Phone Number'}
            description={'9812345678'}
          />
          <ProfileComponent
            title={'Change Email'}
            description={'jack12@gmail.com'}
          />
          <ProfileComponent
            title={'Change Password'}
            description={'Change Password'}
          /> */}

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              style={styles.button}
              name="My Order"
              onPress={() => {
                navigation.navigate('MyOrder');
              }}
            />
            <Button
              style={styles.button}
              name="Review"
              onPress={() => {
                navigation.navigate('Review');
              }}
            />

            <Button
              style={styles.button}
              name="Settings"
              onPress={() => {
                navigation.navigate('Setting');
              }}
            />
          </View>
        </ScrollView>
      </View>
      <BottomTab focused={'Profile'} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    width: 100,
  },
});
