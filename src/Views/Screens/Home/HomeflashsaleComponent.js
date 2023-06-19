import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeflashsaleComponent = ({image, title, price}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image source={image} style={{height: 80, width: 80}} />
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fc5c02'}}>
            {title}
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'orange'}}>
            {price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeflashsaleComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    height: 140,
    width: 110,
    margin: 10,
    borderWidth: 1,
    borderColor: '#cfd8dc',
  },
});
