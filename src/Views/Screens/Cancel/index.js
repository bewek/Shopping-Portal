import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import CancelComponent from './CancelComponent';
import {menshirtImage} from '../../../Assets/Images';
import ReasoncancelComponent from './ReasoncancelComponent';

const cancel = [
  {name: 'I changed my mind'},
  {name: 'Delivery time is so long'},
  {name: 'I will not be able to take delivery at given date'},
  {name: 'Shipping Charge is high'},
  {name: 'Color does not match what i have select'},
  {name: 'Due to no return policy on this product'},
];

const Cancel = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Button
            style={styles.butt}
            name="<-"
            onPress={() => {
              navigation.navigate('MyOrder');
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
            Cancel Order
          </Text>
        </View>

        <CancelComponent
          image={menshirtImage}
          title={'Men Shirt'}
          description={'Solid cotton full sleeves formal shirt'}
          stock={'Only 5 items in stock'}
          price={'Rs. 1500'}
          quantity={'Qty 1'}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            margin: 10,
            marginLeft: 20,
          }}>
          Reason
        </Text>

        {cancel.map((item, index) => {
          return <ReasoncancelComponent key={index} title={item?.name} />;
        })}

        {/* <ReasoncancelComponent title={'I changed my mind'} />

        <ReasoncancelComponent title={'Delivery time is so long'} />

        <ReasoncancelComponent
          title={'I will not be able to take delivery at given date'}
        />

        <ReasoncancelComponent title={'Shipping Charge is high'} />

        <ReasoncancelComponent
          title={'Color does not match what i have select'}
        />

        <ReasoncancelComponent
          title={'Due to no return policy on this product'}
        /> */}

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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

export default Cancel;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    width: 130,
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
