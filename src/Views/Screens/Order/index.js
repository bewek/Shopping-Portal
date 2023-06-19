import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';

const Order = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
            margin: 20,
          }}>
          Your Order is Confirmed
        </Text>

        <Text style={{fontSize: 18, color: 'black', padding: 15}}>
          Ordered by : Jack Will
          {'\n'}
          9812345678
          {'\n'}
          Satdobato, Lalitpur, Bagmati Province, Nepal
        </Text>

        <Text style={{fontSize: 18, color: 'black', padding: 15}}>
          Men Shirt
          {'\n'}
          Ordered Date : 15 January
          {'\n'}
          Received date : 21 January - 26 January
        </Text>

        <Text style={{fontSize: 18, color: 'black', padding: 15}}>
          One Piece
          {'\n'}
          Ordered Date : 15 January
          {'\n'}
          Received date : 21 January - 26 January
        </Text>

        <Text style={{fontSize: 18, color: 'orange', padding: 15}}>
          Dear Customer Please receive the order on time.
          {'\n'}
          Thank You for purchasing goods from Lime Fashion.
        </Text>

        <Button
          style={styles.button}
          name="Back To Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    width: 160,
    alignSelf: 'center',
  },
});
