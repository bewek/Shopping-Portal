import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';
import ReturnComponent from './ReturnComponent';
import {menshirtImage} from '../../../Assets/Images';
import ReturnreasonComponent from './ReturnreasonComponent';

const ret = [
  {name: 'Item is damaged/torn'},
  {name: 'Product is not good as a expected'},
  {name: 'Size is too large or too small'},
  {name: 'Product not same as in picture'},
  {name: 'Product has missing items'},
];

const Return = () => {
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
            {' '}
            Return an Item
          </Text>
        </View>

        <ReturnComponent
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

        {ret.map((item, index) => {
          return <ReturnreasonComponent key={index} title={item?.name} />;
        })}

        {/* <ReturnreasonComponent title={'Item is damaged/torn'} />

        <ReturnreasonComponent title={'Product is not good as a expected'} />

        <ReturnreasonComponent title={'Size is too large or too small'} />

        <ReturnreasonComponent title={'Product not same as in picture'} />

        <ReturnreasonComponent title={'Product has missing items'} /> */}

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

export default Return;

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
