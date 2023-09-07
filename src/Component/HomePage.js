import React from 'react'
import { View,Text,Image,TouchableOpacity, Button, ScrollView} from 'react-native'
import Header from './Header'
import HomePageCard from './HomePageCard'

function HomePage() {
  return (
<View style={{backgroundColor:'#fff',flex:1}}>
  <Header/>
  <ScrollView>
  <View style={{marginLeft:25}}>
     <Text
            style={{
              color: 'black',
              fontSize: 35,
              fontFamily: 'serif-bold',
              width:'85%',
              marginTop:40,
              textAlign: 'left',
              textAlignVertical: 'center',
            }}>
            What services 
            </Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{color: 'black',
              fontSize: 35,
              fontFamily: 'serif-bold',
              textAlign: 'left',
              textAlignVertical: 'center',}}>do you need?{'       '}
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/616/616490.png',
              }}
              style={{height: 50, width: 50}}
            />
            </Text>
            </View>
            <View>
               <HomePageCard heading={'Schedule a Pickup'} title={'Easiest way ever'} image={'https://redline-delivery.com/images/g8.jpg'}  button={'Continue'}/>
              <HomePageCard heading={'Dry Clean'} title={'Affordable laundry service'} image={'https://th.bing.com/th/id/OIP.Xu4FKVtCKrTuTSDpt6o20AAAAA?pid=ImgDet&rs=1'} icon={require('../Assets/side-arrow.png')} MRP={'60.00/kg'} />
              <HomePageCard heading={'Wash and Iron'} title={'The shine that matters'} image={'https://bestforhome.com.au/wp-content/uploads/2021/10/best-iron-australia-768x512.jpg'} icon={require('../Assets/side-arrow.png')}MRP={'120.00/kg'} />
              <HomePageCard heading={'Wash and Iron'} title={'The shine that matters'} image={'https://bestforhome.com.au/wp-content/uploads/2021/10/best-iron-australia-768x512.jpg'} icon={require('../Assets/side-arrow.png')}MRP={'120.00/kg'} />
            </View>
            <View
            style={{
            borderRadius: 20,
            marginTop: 30,
            right: 10,
            backgroundColor: 'white',
            width: '96%',
            height: 65,
            margin: 5,
            shadowOpacity: 1,
            elevation: 20,
            right:12,
            borderColor:'orange',
            borderWidth:1,
            flexDirection:'row',
            justifyContent:'space-evenly',
            bottom:170,
            alignSelf:'center'
          }}>
           <Image
                source={require('../Assets/delivery-truck.png')}
                style={{height: 50, width: 50,alignSelf:'center',right:20}}
              />
              <Text style={{fontFamily: 'serif-bold', fontSize: 20,color:'black',alignSelf:'center',right:15}}>
             Pickup Confirmed
              </Text>

              <Image
                source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271226.png'}}
                style={{tintColor:'#ff8300',height:20,width:19,alignSelf:'center',left:18}} />
            </View>
            </View>
          </ScrollView>
</View>


    )
}

export default HomePage


