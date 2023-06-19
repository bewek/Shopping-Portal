import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import MyorderComponent from './MyorderComponent';
import {menshirtImage, onepieceImage} from '../../../Assets/Images';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const order = [
  {
    name: 'Men Shirt',
    description: 'Solid cotton full sleeves formal shirt',
    price: 1500,
    quantity: 1,
    image: menshirtImage,
    order: 'Ordered Date :  15January',
    receive: 'Received Date : 21January-26January',
  },
  {
    name: 'One Piece',
    description: 'Good quality onepiece for women',
    price: 900,
    quantity: 1,
    image: onepieceImage,
    order: 'Ordered Date :  14January',
    receive: 'Received Date : 19January-24January',
  },
];

const MyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Button
            style={styles.butt}
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
            My Order
          </Text>
        </View>

        {order.map((item, index) => {
          return (
            <MyorderComponent
              key={index}
              image={item?.image}
              title={item?.name}
              description={item?.description}
              price={`Rs ${item?.price}`}
              quantity={`-  ${item?.quantity}  +`}
              order={item?.order}
              receive={item?.receive}
            />
          );
        })}

        {/* <MyorderComponent
          image={menshirtImage}
          title={'Men Shirt'}
          description={'Solid cotton full sleeves formal shirt'}
          price={'Rs. 1500'}
          quantity={'Qty 1'}
          order={'Ordered Date :  15January'}
          receive={'Received Date : 21January-26January'}
        />

        <MyorderComponent
          image={onepieceImage}
          title={'One Piece'}
          description={'Good quality onepiece for women'}
          price={'Rs. 900'}
          quantity={'Qty 1'}
          order={'Ordered Date :  14January'}
          receive={'Received Date : 19January-24January'}
        /> */}

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Button
            style={styles.button}
            name="Cancel Order"
            onPress={() => {
              navigation.navigate('Cancel');
            }}
          />

          <Button
            style={styles.button}
            name="Return"
            onPress={() => {
              navigation.navigate('Return');
            }}
          />
        </View>
      </View>
      <BottomTab />
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    width: 120,
    borderColor: 'grey',
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
