import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BuyCardComponent = ({title}) => {
  return (
    <View>
      <View style={styles.card}>
        <View>
          <Text style={{fontSize: 15, color: 'black', padding: 10}}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BuyCardComponent;

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
  },
});
