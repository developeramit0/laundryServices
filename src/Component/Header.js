import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

function Header() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
          
          
        }}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/8280/8280679.png',
          }}
          style={{height: 50, width: 50}}
        />
        <View style={{flexDirection: 'column', right: 5}}>
          <Text style={{fontFamily: 'serif-bold', fontSize: 15}}>
            My location
          </Text>
          <View style={{flexDirection: 'row', top: 5}}>
            <Text style={{fontFamily: 'serif', fontSize: 18, color: 'black'}}>
              Vizag, Andhra Pradesh
            </Text>
            <TouchableOpacity>
              <Image
                source={require('../Assets/down-arrow.png')}
                style={{height: 28, width: 28, left: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require('../Assets/shopping-cart.png')}
          style={{height: 35, width: 35, top: 10,left:28}}
        />
        <Image source={require('../Assets/circle.png')} style={{height:20,width:20,top:3}}/>

      </View>
      
    </View>
  );
}

export default Header;
