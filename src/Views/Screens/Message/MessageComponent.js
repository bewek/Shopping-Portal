import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MessageComponent = ({image, title, description}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
          source={image}
          style={{
            width: 50,
            height: 50,
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
              fontSize: 14,
              color: 'black',
            }}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItem: 'center',
    height: 70,
    width: 370,
    margin: 8,
  },
});
