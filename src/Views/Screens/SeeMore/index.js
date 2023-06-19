import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomTab from '../../Components/BottomTab';
import SeemoreComponent from './SeemoreComponent';
import {
  blackshoeImage,
  ladiesdressImage,
  ladiespurseImage,
  menjoggerImage,
  menshirtImage,
  watchImage,
} from '../../../Assets/Images';
import SeeimageComponent from './SeeimageComponent';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';

const seemore = [
  {name: 'Men Shirt', price: 1500, image: menshirtImage},
  {name: 'Tops', price: 2000, image: ladiesdressImage},
  {name: 'Handbag', price: 2800, image: ladiespurseImage},
  {name: 'Fossil', price: 3300, image: watchImage},
  {name: 'Black Shoe', price: 2200, image: blackshoeImage},
  {name: 'Jogger', price: 1500, image: menjoggerImage},
];

const SeeMore = () => {
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
            Categories
          </Text>

          <SeemoreComponent />

          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              margin: 10,
              padding: 10,
            }}>
            View More
          </Text>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {seemore.map((item, index) => {
              return (
                <SeeimageComponent
                  key={index}
                  image={item?.image}
                  title={item?.name}
                  price={`Rs ${item?.price}`}
                />
              );
            })}

            {/* <SeeimageComponent
              image={menshirtImage}
              title={'Men Shirt'}
              price={'Rs. 1500'}
            />

            <SeeimageComponent
              image={ladiesdressImage}
              title={'Tops'}
              price={'Rs. 2000'}
            />

            <SeeimageComponent
              image={ladiespurseImage}
              title={'Handbag'}
              price={'Rs. 2800'}
            />

            <SeeimageComponent
              image={watchImage}
              title={'Fossil'}
              price={'Rs. 3300'}
            />
            <SeeimageComponent
              image={blackshoeImage}
              title={'Black Shoe'}
              price={'Rs. 2200'}
            />
            <SeeimageComponent
              image={menjoggerImage}
              title={'Jogger'}
              price={'Rs. 1500'}
            /> */}
          </View>
          <Button
            style={styles.button}
            name="Details"
            onPress={() => {
              navigation.navigate('Detail');
            }}
          />
        </ScrollView>
      </View>
      <BottomTab />
    </View>
  );
};

export default SeeMore;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    alignSelf: 'center',
  },
});
