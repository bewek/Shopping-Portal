import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ReturnComponent = ({image, title, description, price, quantity}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={image}
            style={{
              width: 100,
              height: 100,
            }}
          />

          <View>
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
                fontSize: 14,
                color: 'black',
              }}>
              {description}
            </Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'orange',
                }}>
                {price}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',
                  textAlign: 'center',
                }}>
                {quantity}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReturnComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignItem: 'center',
    height: 120,
    margin: 8,
  },
});
