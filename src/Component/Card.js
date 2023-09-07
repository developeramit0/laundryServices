import React from 'react'
import { View,Image,Text,TouchableOpacity } from 'react-native'

function Card({heading,Date,color}) {
  return (
<View style={{left:25}} >
<View
          style={{
            borderRadius: 25,
            marginTop: 30,
            right: 10,
            backgroundColor: 'white',
            width: '92%',
            height: 180,
            margin: 5,
            shadowOpacity: 1,
            elevation: 20,
            right:12
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 15,
            }}>
            <View
              style={{
                borderRadius: 15,
                borderColor: 'pink',
                backgroundColor: '#ffe4c0',
                borderWidth: 1,
                width: 60,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                right: 20,
              }}>
              <Image
                source={require('../Assets/delivery-truck.png')}
                style={{height: 50, width: 50}}
              />
            </View>

            <View style={{flexDirection: 'column', right: 35}}>
              <Text style={{fontFamily: 'serif-bold', fontSize: 18,color: color?color:'#ff8300'}}>
             {heading}
              </Text>
              <Text
                style={{
                  fontFamily: 'serif-bold',
                  fontSize: 16,
                  color: 'black',
                  top: 5,
                }}>
             {Date}
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/271/271228.png',
                }}
                style={{height: 20, width: 20, top: 5, left: 20}}
              />
            </TouchableOpacity>
          </View>
           <View style={{flexDirection:'row',justifyContent:'space-around',right:10}}>
            <Data icon={'https://cdn-icons-png.flaticon.com/128/3155/3155749.png'}
            title= {'Invoice'}
            title2={'#BHA6142 '}/>
          <Data icon={'https://cdn-icons-png.flaticon.com/128/747/747310.png'}
          title={'Estimated Delivery'}
          title2={'Aug 15,2023'}/>
          </View>
   </View>
</View>
)
}



export default Card
const Data=({icon,title,title2})=>{
    return(
    <View
      style={{
        borderRadius: 15,
        backgroundColor: '#ebebeb',
        borderWidth: 1,
        width: 165,
        height: 60,
        alignItems: 'center',
        left: 10,
        top: 20,
        elevation: 2,
        borderColor: '#ebebeb',
        flexDirection: 'row',
      }}>
      <Image
      src={icon}
        style={{height: 25, width: 25,tintColor:'black',left:10}}
      />
      <View style={{flexDirection: 'column',left:20,bottom:2}}>
        <Text style={{fontFamily: 'serif-bold',fontWeight:'700',color:'gray', fontSize: 11}}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: 'serif-bold',
            fontSize: 13,
            color: 'black',
            top: 3,
          }}>
         {title2}
        </Text>
      </View>
        
    </View>
    );

}