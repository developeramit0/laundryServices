import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LoginImg from './LoginImg';

function Login({navigation}) {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <LoginImg />
        <View style={styles.Margin}>
          <Text style={styles.Text}>Log In</Text>
          <Text style={[styles.font, styles.MarginV,
        // {
        //   color : 'orange',
        // }  
        ]

          }>
            Welcome to best laundry services application
          </Text>
          <Text style={[styles.font, styles.Top]}>Mobile Number</Text>
          <TextInput
            style={[styles.TextInput]}
            // value={email}
            placeholder="Enter Your Mobile no."
          />
          <TouchableOpacity style={styles.Button} 
          onPress={()=>navigation.navigate('Bottom')}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'serif',
              }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{top: 30, alignSelf: 'center'}}>
          <Text numberOfLines={1}>
            _______________________ Or _______________________
          </Text>
        </View>
        <TouchableOpacity style={styles.SignupButton}>
          <Text style={{textAlign:'center',
                fontSize: 18,
                fontFamily: 'serif',
                color:'#ff7f00'}}>Sign Up</Text>
        </TouchableOpacity>
           <Text style={{bottom:20,color:'black',fontSize:11,width:290,height:150,left:65}}>
          By continuing you are accepting out terms & conditions
          </Text>

      </ScrollView>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  Text: {
    fontFamily: 'serif-bold',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 30,
    color: '#ff7f00',
  },
  Margin: {
    marginLeft: 25,
    top: 25,
  },

  font: {
    fontSize: 16,
    color: 'black',
  },
  Top: {
    top: 20,
  },
  TextInput: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    color: '#949292',
    borderRadius: 12,
    borderWidth: 1.2,
    borderColor: '#ffb800',
    marginTop: 28,
    width: '95%',
    height:60
  },
  MarginV: {
    marginVertical: 15,
  },
  Button: {
    fontFamily: 'serif',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffb800',
    marginTop: 28,
    width: '90%',
    justifyContent: 'center',
    marginStart: 10,
    backgroundColor: '#ff6400',
    shadowOpacity: 5,
    elevation: 10,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 30,
    shadowColor: 'orange',
    height: 50,
  },
  SignupButton:{
    fontFamily: 'serif',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ffb700',
    marginVertical:40,
    width: '85%',
    height: 50,
    justifyContent:'center',
    marginStart:10,
    alignSelf:'center',
    marginTop:50
  }
});
