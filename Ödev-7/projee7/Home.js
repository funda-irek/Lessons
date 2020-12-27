import React from 'react';
import { Text } from 'react-native';

export default class Home extends React.Component{

    constructor(props){
        super(props);


        this.state = {

            users: []
           
        }
    }
    samplePromise(){
        return new Promise((resolve,reject)=>{
            if(1===1){
                resolve("eşitlik sağlandı.");
            } else {
                reject("eşitlik sağlanamadı.");
            }
        })
    }
    
    componentDidMount() {
        console.warn("3- componentDidMount");
        
    }

    render(){
        this.samplePromise().then(r=> {
            console.warn("r:",r);
        }).catch(e=>{
            console.warn("e :",e);
        })
    

        return(

            <Text> Home Screnn..</Text>
        )



        }
    } 
