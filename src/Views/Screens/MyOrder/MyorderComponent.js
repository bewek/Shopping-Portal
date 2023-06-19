import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MyorderComponent = ({
  image,
  title,
  description,
  price,
  order,
  receive,
  quantity,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={image}
          style={{
            width: 100,
            height: 120,
          }}
        />

        <View
          style={{
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            {description}
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
              {price}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: 5,
              }}>
              {quantity}
            </Text>
          </View>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
            {order}
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>
            {receive}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyorderComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItem: 'center',
    height: 150,
    margin: 5,
  },
});
