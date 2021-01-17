import React, { Component } from 'react';
import {View ,Text ,StyleSheet,TextInput,Dimensions, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

const{width,height} = Dimensions.get('window');
export default class fbkullanımı extends Component{

  state={
    email:" ",
    password :" ",
    login:false
  }
componentDidMount = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyCnBsYc6GetlE38u0Qz5WY_BkDOe7GnF70",
    authDomain: "reactproject-dc00a.firebaseapp.com",
    databaseURL: "https://reactproject-dc00a-default-rtdb.firebaseio.com",
    projectId: "reactproject-dc00a",
    storageBucket: "reactproject-dc00a.appspot.com",
    messagingSenderId: "270881315538",
    appId: "1:270881315538:web:26336c5a28ff2ef6896b0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(auth =>{
    if(auth){

      console.warn("Giriş Yapıldı");

    }else {
      console.warn("Giriş Yapılamadı");
    }


  })
}


kayitol = () => {
  firebase.auth().createUserWithEmailAndPassword ("fundairekk@gmail.com" ,  "b12587")
}

giris = () =>{
  firebase.auth().signInWithEmailAndPassword ("fundairekk@gmail.com" ,  "b12587")

}

render(){
  return (
    <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <TextInput
    placeholder="E-Mail "
    style={{marginTop:10, width:width-40,padding:10,fontSize:14,backgroundColor:'#CE93D8',borderRadius: 4}}
    underlineColorAndroid='transparent'
    onChangeText={email=>this.setState({email:email})}
    value={this.state.email}
    keyboardType='email-adress'
    placeholderTextColor='gray'
    />

    <TextInput
    placeholder="Şifre"
    style={{marginTop:10, width:width-40,padding:10,fontSize:14,backgroundColor:'#CE93D8',borderRadius: 4}}
    underlineColorAndroid='transparent'
    onChangeText={password=>this.setState({password:email})}
    value={this.state.password}
    secureTextEntry
    placeholderTextColor='gray'
    />
    <TouchableOpacity onPress={() =>this.kayitol()}>
    <View style={{alignItems:'center',backgroundColor:'#FF6558',width:width-40,padding:10,fontSize:14,backgroundColor:'#CE93D8',borderRadius: 4 ,marginTop:10}}>
      <Text style={{alignItems:'center',backgroundColor:'#FF6558',width:width-40,padding:10,fontSize:14,backgroundColor:'#CE93D8',borderRadius: 4 ,marginTop:10}}>Kayıt Ol </Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() =>this.giris()}>

    <View style={{alignItems:'center',backgroundColor:'#FF6558',width:width-40,padding:10,fontSize:14,backgroundColor:'#CE93D8',borderRadius: 4 ,marginTop:10}}>
      <Text style={{alignItems:'center',backgroundColor:'#FF6558',width:width-40,padding:10,fontSize:14,backgroundColor:'#CE93D8',borderRadius: 4 ,marginTop:10}}>Giriş Yap </Text>
    </View>
    </TouchableOpacity>
    </View>

  );
}


}