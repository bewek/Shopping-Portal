import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import {menshirtImage, onepieceImage} from '../../../Assets/Images';
import DetailComponent from './DetailComponent';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const detail = [
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

const Detail = () => {
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
                navigation.navigate('SeeMore');
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'orange',
                textAlign: 'center',
                margin: 20,
                marginLeft: 30,
              }}>
              {' '}
              Product Details
            </Text>
          </View>

          {detail.map((item, index) => {
            return (
              <DetailComponent
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
          {/* 
          <DetailComponent
            image={menshirtImage}
            title={'Men Shirt'}
            description={'Solid cotton full sleeves formal shirt'}
            stock={'Only 5 items in stock'}
            price={'Rs. 1500'}
            quantity={'Qty 1'}
          />
          <DetailComponent
            image={onepieceImage}
            title={'One Piece'}
            description={'Good quality onepiece for women'}
            stock={'Only 7 items in stock'}
            price={'Rs. 900'}
            quantity={'Qty 1'}
          /> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 10,
            }}>
            <Button
              style={styles.button}
              name="Add to Cart"
              onPress={() => {
                navigation.navigate('Cart');
              }}
            />
            <Button
              style={styles.button}
              name="Buy"
              onPress={() => {
                navigation.navigate('Buy');
              }}
            />
          </View>
        </ScrollView>
      </View>
      <BottomTab />
    </View>
  );
};

export default Detail;

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
