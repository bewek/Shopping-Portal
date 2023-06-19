import {StyleSheet, Text, View, ImageBackground, TextInput} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import commonStyles from '../css';
import {backgroundImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.container}>Create your Account</Text>

        <Text style={styles.text}> Full Name* </Text>
        <TextInput
          placeholder="Please enter your Full Name"
          style={commonStyles.input}
        />

        <Text style={styles.text}> Username* </Text>
        <TextInput
          placeholder="Please enter your Username"
          style={commonStyles.input}
        />

        <Text style={styles.text}> Email* </Text>
        <TextInput
          placeholder="Please enter your Email"
          style={commonStyles.input}
        />

        <Text style={styles.text}> Password* </Text>
        <TextInput
          placeholder="Please enter your Password"
          style={commonStyles.input}
        />

        <Text style={styles.text}> Confirm Password* </Text>
        <TextInput
          placeholder="Please Confirm your Password"
          style={commonStyles.input}
        />
        <View style={{alignSelf: 'center'}}>
          <Button
            name={'SignUp'}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />

          <Button
            name={'Login'}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  background: {
    height: '100%',
  },
  text: {
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
});
