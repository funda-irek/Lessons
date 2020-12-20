import React from 'react';
import {Text,View} from 'react-native';

export default class UserList extends React.Component{

  constructor(props){
   super (props);
   this.state ={
       users:[]
   }
   console.warn("1 constructor");
  }

    async componentDidMount(){
   
      let res = await fetch( " https://jsonplaceholder.typicode.com/posts")
      .then(r=>r.json());
      then(res=>{

        console.warn("res",res);
        this.setState(users:res.result)
      
     }).catch (c=>{
         console.warn("Hata:",e)
     });

  

    };
     
      
     


  }

  renderUserList =() =>{
       if(!this.state.users || this.state.users.length<1){
           return null;
       }

    return (
        <View>
            {
         this.state.users.map(v=> {
           
           return (<Text>{v.name.first} </Text>)
       })
    }
        </View>
    )
  }


    render(){

        console.warn("2 render");

   return(
       <View>
       <Text>UserList Screen </Text>
       {  this.renderUserList()}
         
       
          </View>
   )


    }

}