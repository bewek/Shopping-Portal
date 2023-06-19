// In App.js in a new project

import * as React from 'react';
import {View, Text, Settings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp} from '../../Screens';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';
import Message from '../../Screens/Message';
import Cart from '../../Screens/Cart';
import Buy from '../../Screens/Buy';
import Payment from '../../Screens/Payment';
import Order from '../../Screens/Order';
import SeeMore from '../../Screens/SeeMore';
import MenFashion from '../../Screens/MenFashion';
import WomenFashion from '../../Screens/WomenFashion';
import Detail from '../../Screens/Detail';
import MyOrder from '../../Screens/MyOrder';
import Cancel from '../../Screens/Cancel';
import Return from '../../Screens/Return';
import Review from '../../Screens/Review';
import Reviewed from '../../Screens/Reviewed';
import Setting from '../../Screens/Setting';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Buy" component={Buy} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="SeeMore" component={SeeMore} />
      <Stack.Screen name="MenFashion" component={MenFashion} />
      <Stack.Screen name="WomenFashion" component={WomenFashion} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="Cancel" component={Cancel} />
      <Stack.Screen name="Return" component={Return} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Reviewed" component={Reviewed} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
}

export default App;
