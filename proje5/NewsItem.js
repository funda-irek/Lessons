import React from 'react'

import { ScrollView, View , Text} from 'react-native';
import App from './App';

export default class NewsItem extends React.Component{

    render(){

        const type = this.props.type;
        
            let itemrenk='#FFF';
            

            if(type==='SİNEMA'){
                itemrenk = '#E1BEE7'
            }else if(type==='MODA'){
                itemrenk = '#B388FF'
            }else if(type==='SPOR'){
                itemrenk = '#9FA8DA'
            }else if(type==='EKONOMİ'){
                itemrenk = '#BBDEFB'
            }else if(type==='MAGAZİN'){
                itemrenk = '#B2EBF2'
            }

            return(
                <View style={{backgroundColor:itemrenk, flex:1, minHeight:125}}>
                <Text style={{marginLeft:4, marginTop:5, color:'#191970'}}>{this.props.type}</Text>
                <Text style={{marginLeft:4, marginTop:10, color:'4B0082'}}>{this.props.title}</Text>
                <Text style={{marginLeft:4, marginTop:5, color:'#000000'}}>{this.props.description}</Text>

                </View>
            );

    }

}