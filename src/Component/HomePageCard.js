import React from 'react'
import { View,Image,TouchableOpacity,Text } from 'react-native'

function HomePageCard({image,heading,button,title,icon,MRP}) {

// const Data=({icon,heading,title,image,button,MRP,con})=>{
return(
       <View
          style={{
            borderRadius: 25,
            marginTop: 30,
            backgroundColor: 'white',
            width: '97%',
            height: 150,
            margin: 5,
            elevation: 10,
            right:10,
            borderWidth:1,
            shadowColor:'white',
            borderColor:'lightgray',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 15,
            }}>
           
              <Image
                src={image}
                style={{height: 120, width: 120,borderRadius:10,right:10}}
              />

            <View style={{flexDirection: 'column', right: 15,top:10}}>
              <Text style={{fontFamily: 'serif', fontSize: 18,color:'black',fontWeight:'600'}}>
             {heading}
              </Text>
              <Text
                style={{
                  fontFamily: 'serif-bold',
                  fontSize: 12,
                  fontWeight:'700',
                  color: 'gray',
                  top: 5,
                }}>
             {title}
              </Text>
             {
             button?
              <TouchableOpacity style={{borderRadius:180,backgroundColor:'#ff8300',height:37,top:20,justifyContent:'space-around',flexDirection:'row',paddingTop:7}}>
                <Text style={{color:'white',textAlign:'center',fontSize:16}}>{button}</Text>
                <Image style={{tintColor:'white',height:20,width:19}}source={{uri:'https://cdn-icons-png.flaticon.com/128/271/271226.png'}}/>
              </TouchableOpacity>
              :
              <Text style={{color:'#ff8300',top:10,fontSize:20,fontWeight:'bold'}}>
                <Image source={require('../Assets/rupee-indian.png')}style={{height:20,width:20}}/>
               {MRP}
              </Text>
             }

            </View>
            
            <TouchableOpacity>
              
              <Image
                source={icon}
                style={{height: 30, width: 30, top: 32, left:5}}
              />

            </TouchableOpacity>
          
          </View>
          </View>
)
}


    


export default HomePageCard