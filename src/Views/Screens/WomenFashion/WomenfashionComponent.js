import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const WomenfashionComponent = ({image, title, price}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image source={image} style={{height: 100, width: 130}} />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {title}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
            {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default WomenfashionComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    height: 180,
    width: 170,
    margin: 10,
    borderColor: '#cfd8dc',
    borderWidth: 2,
  },
});
