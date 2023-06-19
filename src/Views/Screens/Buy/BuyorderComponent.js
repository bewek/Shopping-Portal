import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const BuyorderComponent = ({title, delivery, itemtotal, total}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
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
              margin: 10,
            }}>
            {title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            {itemtotal}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            {delivery}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            {total}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BuyorderComponent;

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
    margin: 5,
  },
});
