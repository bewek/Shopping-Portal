import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import MenfashionComponent from './MenfashionComponent';
import {
  blackshoeImage,
  jacketcoatImage,
  jeansjacketImage,
  menbootImage,
  menjoggerImage,
  menpantImage,
  menshirtImage,
  mentsirtImage,
  naviwatchImage,
  watchImage,
} from '../../../Assets/Images';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const men = [
  {name: 'Men Shirt', price: 1500, image: menshirtImage},
  {name: 'Jogger', price: 1500, image: menjoggerImage},
  {name: 'Coat Jacket', price: 4000, image: jacketcoatImage},
  {name: 'Jeans Jacket', price: 2800, image: jeansjacketImage},
  {name: 'Black Shoe', price: 2200, image: blackshoeImage},
  {name: 'Fossil Watch', price: 3300, image: watchImage},
  {name: 'Men T-Shirt', price: 1000, image: mentsirtImage},
  {name: 'Cotton Pant', price: 1300, image: menpantImage},
  {name: 'Boot', price: 2700, image: menbootImage},
  {name: 'Naviforce', price: 3600, image: naviwatchImage},
];

const MenFashion = () => {
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
              Men Fashion
            </Text>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {men.map((item, index) => {
              return (
                <MenfashionComponent
                  key={index}
                  image={item?.image}
                  title={item?.name}
                  price={`Rs ${item?.price}`}
                />
              );
            })}
            {/* <MenfashionComponent
              image={menshirtImage}
              title={'Men Shirt'}
              description={'Rs. 1500'}
            />

            <MenfashionComponent
              image={menjoggerImage}
              title={'Jogger'}
              description={'Rs. 1500'}
            />
            <MenfashionComponent
              image={jacketcoatImage}
              title={'Coat Jacket'}
              description={'Rs. 4000'}
            />
            <MenfashionComponent
              image={jeansjacketImage}
              title={'Jeans Jacket'}
              description={'Rs. 2800'}
            />
            <MenfashionComponent
              image={blackshoeImage}
              title={'Black Shoe'}
              description={'Rs. 2200'}
            />
            <MenfashionComponent
              image={watchImage}
              title={'Fossil Watch'}
              description={'Rs. 3300'}
            />
            <MenfashionComponent
              image={mentsirtImage}
              title={'Men T-Shirt'}
              description={'Rs. 1000'}
            />
            <MenfashionComponent
              image={menpantImage}
              title={'Cotton Pant'}
              description={'Rs. 1300'}
            />
            <MenfashionComponent
              image={menbootImage}
              title={'Boot'}
              description={'Rs. 2700'}
            />
            <MenfashionComponent
              image={naviwatchImage}
              title={'Naviforce'}
              description={'Rs. 3600'}
            /> */}
          </View>
        </ScrollView>
      </View>
      <BottomTab />
    </View>
  );
};

export default MenFashion;

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
