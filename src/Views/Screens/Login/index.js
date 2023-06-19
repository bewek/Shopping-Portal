import {StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../css';
import {backgroundImage} from '../../../Assets/Images';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View>
          <Text style={styles.container}>
            Welcome to Lime Fashion!
            {'\n'}
            Please Login.
          </Text>
        </View>

        <Text style={{fontSize: 15, color: 'black', marginLeft: 10}}>
          Phone Number or Email*
        </Text>
        <TextInput
          placeholder="Please enter your Phone Number or Email"
          style={commonStyles.input}
        />

        <Text style={{fontSize: 15, color: 'black', marginLeft: 10}}>
          Password*
        </Text>
        <TextInput
          placeholder="Please enter your Password"
          style={commonStyles.input}
        />

        <Text
          style={{
            color: '#15e2a3',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            margin: 10,
          }}>
          Forgot Password?
        </Text>

        <View style={{alignSelf: 'center'}}>
          <Button
            name={'Login'}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />

          <Button
            name={'SignUp'}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
  container: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
});
