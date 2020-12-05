
import React,{useState} from 'react';
import {
  FlatList,
  View,
  Text,
  
} from 'react-native';

export default function App(){
  const[people,setpeople] = useState([
    { name:'Karadeniz Bölgesi', id:'1'},
    { name:'Akdeniz  Bölgesi',id:'2'},
    { name:'Ege Bölgesi',id:'3'},
    { name:'İç Anadolu Bölgesi',id:'4'},
    { name:'Marmara  Bölgesi',id:'5'},
    { name:'Güney Doğu Anadolu Bölgesi',id:'6'},
    { name:'Doğu Anadolu Bölgesi',id:'7'},

  ]);


  return (
    <View style={styles.container}>
  <FlatList 
      numColumns={2}
        keyExtractor={(item)=>item.id}
       data={people}
       renderItem={({item }) => (
       <Text style={styles.item}>{item.name}</Text>
       )}
/>

</View>
  );
}

const styles = StyleSheet.creat({
  container:{
    flex:1,
    backgroundColor:'#CE93D8',
    paddinTop:40,
    paddingHorizontal:20,

  },
item:{
  marginTop:24,
  padding:30,
  backgroundColor:'blue',
  fontSize:24,
  marginHorizontal:10,
  marginTop:24,
  
}




});
   

     



  