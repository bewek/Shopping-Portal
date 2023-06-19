import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PaymentcardComponent = ({image, title}) => {
  return (
    <View>
      <View style={styles.card}>
        <Image
          source={image}
          style={{
            width: 120,
            height: 30,
          }}
        />
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            fontWeight: 'bold',
            padding: 5,
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default PaymentcardComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    height: 60,
    width: 350,
    margin: 5,
    borderColor: '#cfd8dc',
    borderWidth: 1,
    flexDirection: 'row',
  },
});
