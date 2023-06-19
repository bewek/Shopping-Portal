import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {menImage, womenImage} from '../../../Assets/Images';
import {useNavigation} from '@react-navigation/native';

const SeemoreComponent = ({image, title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-around',
      }}>
      <View style={styles.cont}>
        <Image
          source={menImage}
          style={{height: 100, width: 100, alignSelf: 'center', margin: 10}}
        />
        <Button
          style={styles.button}
          name="Men Fashion"
          onPress={() => {
            navigation.navigate('MenFashion');
          }}
        />
      </View>

      <View style={styles.cont}>
        <Image
          source={womenImage}
          style={{height: 100, width: 100, alignSelf: 'center', margin: 10}}
        />
        <Button
          style={styles.button}
          name="Women Fashion"
          onPress={() => {
            navigation.navigate('WomenFashion');
          }}
        />
      </View>
    </View>
  );
};

export default SeemoreComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffb03b',
    width: 150,
    height: 40,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'grey',
  },
  cont: {
    height: 180,
    width: 170,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
  },
});
