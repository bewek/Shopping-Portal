import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import ReviewedComponent from './ReviewedComponent';
import {ratingImage} from '../../../Assets/Images';

const Reviewed = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Button
            style={styles.butt}
            name="<-"
            onPress={() => {
              navigation.navigate('Review');
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'orange',
              margin: 20,
              textAlign: 'center',
            }}>
            Review About Product
          </Text>
        </View>

        <ReviewedComponent />

        <TouchableOpacity>
          <Image
            source={ratingImage}
            style={{height: 50, width: 250, alignSelf: 'center', margin: 10}}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'orange',
              margin: 10,
            }}>
            Attach Image
          </Text>
        </TouchableOpacity>

        <Button
          style={styles.button}
          name="Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

export default Reviewed;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    width: 80,
    height: 40,
    alignSelf: 'center',
  },
  butt: {
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'center',
    width: 50,
    height: 40,
    margin: 20,
  },
});
