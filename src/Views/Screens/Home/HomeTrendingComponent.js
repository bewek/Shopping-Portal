import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeTrendingComponent = ({image, title, description}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image source={image} style={{height: 120, width: 140}} />
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            {title}
          </Text>
          <Text style={{fontSize: 13}}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeTrendingComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    height: 180,
    width: 170,
    margin: 10,
    borderColor: '#cfd8dc',
    borderWidth: 1,
  },
});
