import { BlurView } from '@react-native-community/blur'
import React from 'react'
import { Image, View } from 'react-native'

function LoginImg() {
  return (
<View style={{}}>
    <Image source={require('../Assets/laundaryimg.png')}
    style={{height:370,width:'100%'}}
     />
     <BlurView style={{ position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: '20%',
    zIndex: 5}} blurAmount={5} blurType='light'/>
</View>


    )
}

export default LoginImg