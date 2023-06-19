import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {reviewImage} from '../../../Assets/Images';

const DetailComponent = ({
  image,
  title,
  description,
  price,
  stock,
  quantity,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={image}
            style={{
              width: 300,
              height: 150,
              resizeMode: 'contain',
              marginLeft: 25,
            }}
          />

          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
              }}>
              {title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'black',
                marginLeft: 10,
              }}>
              {description}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'red',
                marginLeft: 10,
              }}>
              {stock}
            </Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'orange',
                  marginLeft: 10,
                }}>
                {price}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  textAlign: 'center',
                  margin: 5,
                }}>
                {quantity}
              </Text>
            </View>

            <Image source={reviewImage} style={{width: 350, height: 50}} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DetailComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItem: 'center',
    height: 310,
    margin: 8,
  },
});
