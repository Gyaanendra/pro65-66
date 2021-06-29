import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends  React.Component{
    render(){
        return(
           <Text style={css.textsfds}>
              TEXT TO SPEECH CONVERTER
           </Text>
        )
    }
}


const css =StyleSheet.create({
  textsfds:{
      width:'100%',
      textAlign:'center',
      padding:10,
      backgroundColor:'#1EAE98',
      fontWeight:'bold',
      color:'#D8E3E7',
  }
})