import React from 'react'
import Login from './src/Component/Login'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/Component/BottomTab';



const stack=createNativeStackNavigator();
function App() {
  return (
    
  <>
<NavigationContainer>
  <stack.Navigator screenOptions={{headerShown:false}}>
    <stack.Screen name='Login' component={Login}/>
    <stack.Screen name='Bottom' component={BottomTab}/>

  </stack.Navigator>
</NavigationContainer>
</>
    )
}

export default App
