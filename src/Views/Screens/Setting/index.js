import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'orange',
            textAlign: 'center',
            margin: 20,
          }}>
          Settings
        </Text>

        <View style={{flexDirection: 'column'}}>
          <Button
            style={styles.butt}
            name="Account Information"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />

          <Button style={styles.butt} name="Country (Nepal)" />

          <Button style={styles.butt} name="Language (English)" />

          <Button style={styles.butt} name="Policies" />
          <Button style={styles.butt} name="Help Center" />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 10,
          }}>
          <Button
            style={styles.button}
            name="Logout"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
          <Button
            style={styles.button}
            name="Home"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
  },
  butt: {
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    width: 360,
    margin: 2,
    marginLeft: 15,
  },
});
