import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  saleImage,
  menshirtImage,
  ladiesdressImage,
  ladiespurseImage,
  watchImage,
  menjoggerImage,
  blackshoeImage,
  jacketcoatImage,
  ladiesbootImage,
  onepieceImage,
  jeansjacketImage,
  bagsaleImage,
  hoodiesaleImage,
  jacketsaleImage,
  kurtisaleImage,
  sandalsaleImage,
  watchsaleImage,
} from '../../../Assets/Images';
import HomeTopComponent from './HomeTopComponent';
import Button from '../../Components/Button';
import HomeCategoriesComponent from './HomeCategoriesComponent';
import HomeTrendingComponent from './HomeTrendingComponent';
import HomeflashsaleComponent from './HomeflashsaleComponent';
import BottomTab from '../../Components/BottomTab';
import SeeMore from '../SeeMore';

const categories = [
  {name: 'Men Shirt', price: 1500, image: menshirtImage},
  {name: 'Tops', price: 2000, image: ladiesdressImage},
  {name: 'HandBag', price: 2800, image: ladiespurseImage},
  {name: 'Fossil', price: 3300, image: watchImage},
  {name: 'Black Shoe', price: 2200, image: blackshoeImage},
  {name: 'Jogger', price: 1500, image: menjoggerImage},
];

const trending = [
  {name: 'Coat Jacket', description: '168 Views', image: jacketcoatImage},
  {name: 'Black Boot', description: '200 Views', image: ladiesbootImage},
  {name: 'One Piece', description: '240 Views', image: onepieceImage},
  {name: 'Jeans Jacket', description: '189 Views', image: jeansjacketImage},
];

const sale = [
  {name: '23 Sold', price: 1800, image: bagsaleImage},
  {name: '46 Sold', price: 900, image: hoodiesaleImage},
  {name: '35 Sold', price: 1500, image: jacketsaleImage},
  {name: '86 Sold', price: 650, image: kurtisaleImage},
  {name: '48 Sold', price: 1900, image: sandalsaleImage},
  {name: '18 Sold', price: 2500, image: watchsaleImage},
];

const Home = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState();
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    let task = {
      title: title,
      date: date,
      task: task,
      id: tasks.length,
    };
    if (title && date && task) {
      setTasks([...tasks, task]);
    } else {
      let msg = 'task not found';
      if (!date) {
        msg = 'date not found';
      }
      if (!title) {
        msg = 'title not found';
      }
      Alert.alert(msg);
    }
  };
  const deleteTask = id => {
    let filterd = tasks.filter(task => task.id !== id);
    setTasks(filterd);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView>
          <HomeTopComponent onChange={setInputText} />

          <TouchableOpacity>
            <Image
              source={saleImage}
              style={{height: 180, width: 370, margin: 10}}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              Categories {inputText}
            </Text>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {categories
              .filter(item => item.name.toLowerCase() == inputText)
              .map((item, index) => {
                return (
                  <HomeCategoriesComponent
                    key={index}
                    image={item?.image}
                    title={item?.name}
                    price={`Rs ${item?.price}`}
                  />
                );
              })}
            {/* <HomeCategoriesComponent
              image={menshirtImage}
              title={'Men Shirt'}
              price={'Rs. 1500'}
            />

            <HomeCategoriesComponent
              image={ladiesdressImage}
              title={'Tops'}
              price={'Rs. 2000'}
            />

            <HomeCategoriesComponent
              image={ladiespurseImage}
              title={'Handbag'}
              price={'Rs. 2800'}
            />

            <HomeCategoriesComponent
              image={watchImage}
              title={'Fossil'}
              price={'Rs. 3300'}
            />
            <HomeCategoriesComponent
              image={blackshoeImage}
              title={'Black Shoe'}
              price={'Rs. 2200'}
            />
            <HomeCategoriesComponent
              image={menjoggerImage}
              title={'Jogger'}
              price={'Rs. 1500'}
            /> */}
          </View>

          <Button
            style={styles.button}
            name={'See More'}
            onPress={() => {
              navigation.navigate('SeeMore');
            }}
          />

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                padding: 10,
              }}>
              Trending Now
            </Text>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {trending.map((item, index) => {
              return (
                <HomeTrendingComponent
                  key={index}
                  image={item?.image}
                  title={item?.name}
                  description={item?.description}
                />
              );
            })}
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                padding: 10,
              }}>
              Flash Sale
            </Text>

            <View style={styles.square}>
              <Text
                style={{
                  fontSize: 13,
                  color: 'white',
                  textAlign: 'center',
                  padding: 2,
                  fontWeight: 'bold',
                }}>
                28
              </Text>
            </View>

            <View style={styles.square}>
              <Text
                style={{
                  fontSize: 13,
                  color: 'white',
                  textAlign: 'center',
                  padding: 2,
                  fontWeight: 'bold',
                }}>
                07
              </Text>
            </View>

            <View style={styles.square}>
              <Text
                style={{
                  fontSize: 13,
                  color: 'white',
                  textAlign: 'center',
                  padding: 2,
                  fontWeight: 'bold',
                }}>
                33
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {sale.map((item, index) => {
              return (
                <HomeflashsaleComponent
                  key={index}
                  image={item?.image}
                  title={item?.name}
                  price={`Rs ${item?.price}`}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
      <BottomTab focused={'Home'} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  square: {
    height: 25,
    width: 25,
    borderRadius: 5,
    backgroundColor: 'orange',
    margin: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'orange',
    borderColor: 'grey',
    alignSelf: 'center',
    width: 90,
    height: 35,
  },
});
