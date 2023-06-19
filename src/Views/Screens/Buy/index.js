import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import BuyCardComponent from './BuyCardComponent';
import BuyproductComponent from './BuyproductComponent';
import {menshirtImage, onepieceImage} from '../../../Assets/Images';
import BuyorderComponent from './BuyorderComponent';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const card = [
  {name: 'Satdobato, Lalitpur, Bagmati Province, Nepal'},
  {name: '9812345678'},
  {name: 'Bill to the same address'},
  {name: 'jack12@gmail.com'},
];

const product = [
  {
    name: 'Men Shirt',
    description: 'Solid cotton full sleeves formal shirt',
    stock: 'Only 5 items in stock',
    price: 1500,
    quantity: 1,
    image: menshirtImage,
  },
  {
    name: 'One Piece',
    description: 'Good quality onepiece for women',
    stock: 'Only 7 items in stock',
    price: 900,
    quantity: 1,
    image: onepieceImage,
  },
];

const Buy = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <Button
              style={styles.butt}
              name="<-"
              onPress={() => {
                navigation.navigate('Cart');
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'orange',
                alignSelf: 'center',
                margin: 20,
                marginLeft: 50,
              }}>
              Check Out
            </Text>
          </View>

          {card.map((item, index) => {
            return <BuyCardComponent key={index} title={item?.name} />;
          })}

          {/* <TouchableOpacity>
            <BuyCardComponent
              title={'Satdobato, Lalitpur, Bagmati Province, Nepal'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <BuyCardComponent title={'9812345678'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <BuyCardComponent title={'Bill to the same address'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <BuyCardComponent title={'jack12@gmail.com'} />
          </TouchableOpacity> */}

          {product.map((item, index) => {
            return (
              <BuyproductComponent
                key={index}
                image={item?.image}
                title={item?.name}
                description={item?.description}
                stock={item?.stock}
                price={`Rs ${item?.price}`}
                quantity={`-  ${item?.quantity}  +`}
              />
            );
          })}

          {/* <BuyproductComponent
            image={menshirtImage}
            title={'Men Shirt'}
            description={'Solid cotton full sleeves formal shirt'}
            stock={'Only 5 items in stock'}
            price={'Rs. 1500'}
            quantity={'Qty 1'}
          />
          <BuyproductComponent
            image={onepieceImage}
            title={'One Piece'}
            description={'Good quality onepiece for women'}
            stock={'Only 7 items in stock'}
            price={'Rs. 900'}
            quantity={'Qty 1'}
          /> */}

          <BuyorderComponent
            title={'Order Summary'}
            itemtotal={
              'Item Total                                                            Rs. 2400'
            }
            delivery={
              'Delivery Fee                                                        Rs. 200'
            }
            total={
              'Total Payment                                                    Rs. 2600'
            }
          />

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
              2600
            </Text>
            <Button
              style={styles.button}
              name="Place Order"
              onPress={() => {
                navigation.navigate('Payment');
              }}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button
              style={styles.button}
              name="Home"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Buy;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    width: 120,
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
