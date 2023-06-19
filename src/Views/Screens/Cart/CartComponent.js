import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CartComponent = ({image, title, description, price, quantity}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={image}
          style={{
            width: 100,
            height: 100,
          }}
        />

        <View
          style={{
            justifyContent: 'center',
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
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

            <View style={styles.cont}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
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

export default CartComponent;

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
  cont: {
    height: 30,
    width: '40%',
    backgroundColor: '#d6e7f6',
    borderRadius: 5,
  },
});
