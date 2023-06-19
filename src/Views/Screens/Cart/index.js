import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import CartComponent from './CartComponent';
import {
  blackshoeImage,
  jeansjacketImage,
  ladiesbootImage,
  ladiespurseImage,
  menjoggerImage,
  menshirtImage,
  onepieceImage,
  watchImage,
} from '../../../Assets/Images';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

//Types used in js
const name = 'rupesh'; //string type
const array = []; //array type
const object = {}; //array type
const number = 123; //number type
const boolean = true; //boolean type i.e true and false
const undefined = undefined; //undefined type
const nullType = null; //null type

//array operations

array.map(item => {
  return item;
}); //itterate every item and return anything in array
array.filter(item => item?.price == 1500); //filters the arry according to condition and returns array
array.find(item => item?.price == 1500); //find returns the first item taht match the gicen condition
array.some(item => item?.price == 1500); //checks condition and returns boolean

const data = [
  {
    name: 'Men Shirt',
    description: 'Solid cotton full sleevs formal shirt',
    price: 1500,
    image: menshirtImage,
    quantity: 1,
  },
  {
    name: 'Jeans Jacket',
    description: 'Blue jeens jacket for men',
    price: 1800,
    image: jeansjacketImage,
    quantity: 2,
  },
  {
    name: 'Handbag',
    description: 'Formal handbag for women',
    price: 2800,
    image: ladiespurseImage,
    quantity: 3,
  },
  {
    name: 'One Piece',
    description: 'Good quality onepiece for women',
    price: 900,
    image: onepieceImage,
    quantity: 1,
  },
  {
    name: 'Black Boot',
    description: 'Black boot for women',
    price: 4000,
    image: ladiesbootImage,
    quantity: 2,
  },
  {
    name: 'Men Jogger',
    description: 'Black jogger for men',
    price: 1500,
    image: menjoggerImage,
    quantity: 2,
  },
  {
    name: 'Black Shoe',
    description: 'Formal black shoe for men',
    price: 2200,
    image: blackshoeImage,
    quantity: 3,
  },
  {
    name: 'Fossil',
    description: 'Fossil brand watch for men',
    price: 3300,
    image: watchImage,
    quantity: 1,
  },
];

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'orange',
              textAlign: 'center',
              margin: 20,
            }}>
            My Cart(8)
          </Text>

          <View>
            {data.map((item, index) => {
              return (
                <CartComponent
                  key={index}
                  image={item?.image}
                  title={item?.name}
                  description={item?.description}
                  price={`Rs ${item?.price}`}
                  quantity={`-  ${item?.quantity}  +`}
                />
              );
            })}

            {/* <CartComponent
              image={menshirtImage}
              title={'Men Shirt'}
              description={'Solid cotton full sleeves formal shirt'}
              price={'Rs. 1500'}
              quantity={'-  1  +'}
            />

            <CartComponent
              image={jeansjacketImage}
              title={'Jeans Jacket'}
              description={'Blue jeans jacket for men'}
              price={'Rs. 1800'}
              quantity={'-  1  +'}
            />

            <CartComponent
              image={ladiespurseImage}
              title={'Handbag'}
              description={'Formal handbag for women'}
              price={'Rs. 2800'}
              quantity={'-  1  +'}
            />

            <CartComponent
              image={onepieceImage}
              title={'One Piece'}
              description={'Good quality onepiece for women'}
              price={'Rs. 900'}
              quantity={'-  1  +'}
            />

            <CartComponent
              image={ladiesbootImage}
              title={'Black Boot'}
              description={'Black boot for women'}
              price={'Rs. 4000'}
              quantity={'-  1  +'}
            />

            <CartComponent
              image={menjoggerImage}
              title={'Men Jogger'}
              description={'Black jogger for men'}
              price={'Rs. 1500'}
              quantity={'-  1  +'}
            />

            <CartComponent
              image={blackshoeImage}
              title={'Black Shoe'}
              description={'Formal black shoe for men'}
              price={'Rs. 2200'}
              quantity={'-  1  +'}
            />

            <CartComponent
              image={watchImage}
              title={'Fossil'}
              description={'Fossil brand watch for men'}
              price={'Rs. 3300'}
              quantity={'-  1  +'}
            /> */}
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                margin: 10,
              }}>
              Total=
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'orange',
                margin: 10,
                flex: 1,
              }}>
              {' '}
              18,000
            </Text>
            <Button
              style={styles.button}
              name="Check Out"
              onPress={() => {
                navigation.navigate('Buy');
              }}
            />
          </View>
        </ScrollView>
      </View>
      <BottomTab focused={'Cart'} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
  },
});
