import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import WomenfashionComponent from './WomenfashionComponent';
import {
  ladiesbagImage,
  ladiesbootImage,
  ladiesdressImage,
  ladiesgownImage,
  ladieskurtiImage,
  ladieslongcoatImage,
  ladiespurseImage,
  ladiessandalImage,
  ladiessweaterImage,
  onepieceImage,
} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';
import Button from '../../Components/Button';

const women = [
  {name: 'Tops', price: 2000, image: ladiesdressImage},
  {name: 'Handbag', price: 2800, image: ladiespurseImage},
  {name: 'One Piece', price: 900, image: onepieceImage},
  {name: 'Black Boot', price: 4000, image: ladiesbootImage},
  {name: 'Long Sweater', price: 1400, image: ladiessweaterImage},
  {name: 'Kurti', price: 1100, image: ladieskurtiImage},
  {name: 'Sandal', price: 650, image: ladiessandalImage},
  {name: 'Long Coat', price: 2000, image: ladieslongcoatImage},
  {name: 'Gown', price: 2250, image: ladiesgownImage},
  {name: 'Bag', price: 1000, image: ladiesbagImage},
];

const WomenFashion = () => {
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
                marginLeft: 50,
              }}>
              Women Fashion
            </Text>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {women.map((item, index) => {
              return (
                <WomenfashionComponent
                  key={index}
                  image={item?.image}
                  title={item?.name}
                  price={`Rs ${item?.price}`}
                />
              );
            })}

            {/* <WomenfashionComponent
              image={ladiesdressImage}
              title={'Tops'}
              price={'Rs. 2000'}
            />
            <WomenfashionComponent
              image={ladiespurseImage}
              title={'Handbag'}
              price={'Rs. 2800'}
            />
            <WomenfashionComponent
              image={onepieceImage}
              title={'One Piece'}
              price={'Rs. 900'}
            />
            <WomenfashionComponent
              image={ladiesbootImage}
              title={'Black Boot'}
              price={'Rs. 4000'}
            />
            <WomenfashionComponent
              image={ladiessweaterImage}
              title={'Long Sweater'}
              price={'Rs. 1400'}
            />
            <WomenfashionComponent
              image={ladieskurtiImage}
              title={'Kurti'}
              price={'Rs. 1100'}
            />
            <WomenfashionComponent
              image={ladiessandalImage}
              title={'Sandal'}
              price={'Rs. 650'}
            />
            <WomenfashionComponent
              image={ladieslongcoatImage}
              title={'Long coat'}
              price={'Rs. 3750'}
            />
            <WomenfashionComponent
              image={ladiesgownImage}
              title={'Gown'}
              price={'Rs. 2250'}
            />
            <WomenfashionComponent
              image={ladiesbagImage}
              title={'Bag'}
              price={'Rs. 1000'}
            /> */}
          </View>
        </ScrollView>
      </View>
      <BottomTab />
    </View>
  );
};

export default WomenFashion;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
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
