import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ReasoncancelComponent = ({title}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Text style={{fontSize: 14, color: 'black'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReasoncancelComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 350,
    margin: 2,
    borderColor: '#cfd8dc',
    borderWidth: 1,
    marginLeft: 20,
  },
});
