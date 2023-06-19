import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import PaymentcardComponent from './PaymentcardComponent';
import {
  esewaImage,
  khaltiImage,
  creditImage,
  codImage,
} from '../../../Assets/Images';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const payment = [
  {name: 'Jack Will', image: esewaImage},
  {name: 'Jack Will', image: khaltiImage},
  {name: 'Credit/Debit Card', image: creditImage},
  {name: 'Cash On Delivery', image: codImage},
];

const Payment = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Button
            style={styles.butt}
            name="<-"
            onPress={() => {
              navigation.navigate('Buy');
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
            Select Payment Method
          </Text>
        </View>

        {payment.map((item, index) => {
          return (
            <PaymentcardComponent
              key={index}
              image={item?.image}
              title={item?.name}
            />
          );
        })}

        {/* <PaymentcardComponent image={esewaImage} title={'Jack Will'} />
        <PaymentcardComponent image={khaltiImage} title={'Jack Will'} />

        <PaymentcardComponent image={creditImage} title={'Credit/Debit Card'} />

        <PaymentcardComponent image={codImage} title={'Cash On Delivery'} /> */}

        <View style={{flexDirection: 'row', alignSelf: 'center', margin: 20}}>
          <Text style={{fontSize: 15, color: 'black', padding: 3}}>
            Total =
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'orange',
            }}>
            Rs. 2600
          </Text>
        </View>

        <Button
          style={styles.button}
          name="Confirm Payment"
          onPress={() => {
            navigation.navigate('Order');
          }}
        />
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    width: 180,
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
