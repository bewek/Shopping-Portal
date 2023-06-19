import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import ReviewComponent from './ReviewComponent';
import {menshirtImage} from '../../../Assets/Images';

const Review = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Button
            style={styles.button}
            name="<-"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'orange',
              margin: 20,
              marginLeft: 50,
            }}>
            My Reviews
          </Text>
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 20,
          }}>
          Men Shirt
        </Text>
        <Text style={{color: 'black', marginLeft: 20}}>
          Purchased on 26January 2023
        </Text>

        <ReviewComponent
          image={menshirtImage}
          title={'Men Shirt'}
          description={'Solid cotton full sleeves formal shirt'}
          price={'Rs. 1500'}
          quantity={'Qty 1'}
        />

        <Button
          style={styles.butt}
          name="Review "
          onPress={() => {
            navigation.navigate('Reviewed');
          }}
        />
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'center',
    width: 50,
    height: 40,
    margin: 20,
  },
  butt: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    width: 100,
    height: 40,
    alignSelf: 'center',
  },
});
