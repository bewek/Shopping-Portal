import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ReviewedComponent = () => {
  return (
    <View>
      <Text style={styles.text}> Review Product </Text>
      <TextInput
        placeholder="Tell us more about the product"
        style={styles.input}
      />
    </View>
  );
};

export default ReviewedComponent;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    margin: 10,
    fontSize: 15,
    color: 'white',
    height: 100,
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
  },
});
