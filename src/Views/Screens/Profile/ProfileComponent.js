import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProfileComponent = ({title, description}) => {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            {title}
          </Text>
          <Text style={{fontSize: 13, color: 'black'}}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileComponent;

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
