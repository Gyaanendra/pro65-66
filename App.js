import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput ,Button,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import Header from './header';

export default class App extends React.Component {
  constructor() {
    super();
    this.state={
      text:'',
      noise:'',
      name:''
    }
  }

  sound=()=>{
    var writtenWord = this.state.text;
    writtenWord ? Speech.speak(writtenWord) : alert('The box can not be left empty. Please write something in the box, then click on the button.')
  }

  render(){
  return (
    <View style={styles.container}>
   
       <Header/>
      <Text style={styles.paragraph}>
        Welcome to Text to Speech convertor.You can now convert anything to speech.
      </Text>
      
      <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://miro.medium.com/max/700/1*yDgVdq8--I5pUyGodlzswg.jpeg'
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
      <TouchableOpacity style={{backgroundColor:"gold",width:100,height:40,alignContent:'center',marginLeft:110,marginTop:20,borderWidth:3,borderColor:'black', borderRadius:200}} onPress={()=>
      this.sound()
       }>
      <Text style={{textAlign:'center',marginTop:10,fontFamily:'ink free',fontWeight:'bold',borderColor:'black'}}>Convert</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#A6F6F1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    backgroundColor:'white',
    borderRadius:200
  },

  imageIcon:{
    width:'20%',
    height:'20%',
    marginLeft:90
  },
});
