import React from 'react'
import MyOrders from './MyOrders';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';
import Home from './HomePage';
import HomePage from './HomePage';



const Tab= createBottomTabNavigator();
const stack = createNativeStackNavigator();

function BottomTab() {
 return (
<Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{height:65},tabBarShowLabel: false}} >
   <Tab.Screen name='Home' component={HomePage} options={{tabBarIcon:({focused})=>{
    return(
      <>
      <Image source={require('../Assets/home.png')} style={{height:25,width:25,                   
       tintColor: focused ? 'orange' : 'gray',}}/>
      </>
    )
   }}} />
   <Tab.Screen name='order' component={Orders} options={{tabBarIcon:({focused})=>{
    return(
      <>
      <Image source={require('../Assets/orderstatus.png')} style={{height:25,width:25,                   
       tintColor: focused ? 'orange' : 'gray',}}/>
      </>
    )
   }}} />
   <Tab.Screen name='Like' component={Orders} options={{tabBarIcon:({focused})=>{
    return(
      <>
      <Image source={require('../Assets/like.png')} style={{height:25,width:25,                   
       tintColor: focused ? 'orange' : 'gray',}}/>
      </>
    )
   }}} />
   <Tab.Screen name='User' component={Orders} options={{tabBarIcon:({focused})=>{
    return(
      <>
      <Image source={require('../Assets/user.png')} style={{height:25,width:25,                   
       tintColor: focused ? 'orange' : 'gray',}}/>
      </>
    )
   }}} />

</Tab.Navigator>


    )
}

export default BottomTab
const Orders = () => {
    return (
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name='MyOrders' component={MyOrders}/>
        <stack.Screen name='HomePage' component={HomePage}/>

      </stack.Navigator>
    );
    }