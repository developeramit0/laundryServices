import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Header from './Header';
import Card from './Card';

function MyOrders() {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Header />
      <ScrollView>
      <View style={{marginTop: 30, left: 25}}>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            fontFamily: 'serif-bold',
            fontWeight: '600',
          }}>
          My Orders
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontFamily: 'serif',
            fontWeight: '800',
            top: 10,
          }}>
          Check your order status anytime
        </Text>
       </View>
       <Card heading={'Pickup Scheduled'}Date={'Aug 10, 2023'} />
       <Card heading={'Out For Delivery'} Date={'Aug 08, 2023'}/>
       <Card  heading={' Delivered'} Date={'Aug 08, 2023'}color={'green'} />
       <Card  heading={' Delivered'} Date={'Aug 08, 2023'} color={'green'}/>

       </ScrollView>
    </View>
  );
}

export default MyOrders;
