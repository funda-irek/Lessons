import React from 'react';
import { View,Text,FlatList, TouchableOpacity, ScrollView } from 'react-native';



export default class Home extends React.Component{
    constructor (props){
        super(props);
    this.state={
        selectedCategoryId:0,
       
    }
    }

handlePress= id=>{
   
    this.setState({selectedCategoryId:id})
}

getProductListView(){

     const productList =[
        {name:"Ayran",cateId:2},
        {name:"Su",cateId:2},
        {name:"Tost ",cateId:1},
        {name:"köfte",cateId:1}
        
    ]

    if(this.selectedCategoryId<1){
        return <Text>Kategori Seçilmediği için Üürn Listesi Alınmadı</Text>
    }

    let renderProductList = [];
    productList.map((v,k)=>{
        if(v.cateId===this.state.selectedCategoryId){

            renderProductList.push(<Text sytle={{minHeight:100}}>{v.name}</Text>)

        }

    })

    return renderProductList
    

}
render(){

    return(

        <View>
            <Text>Burası Ana Ekrandır..</Text>
            <Text>selected category: {this.state.selectedCategoryId} </Text>

            <FlatList
            style={{backgroundColor:'blue'}}
            data={[{name:"yiyecek",id:1},{name:"içecek",id:2}]}
            renderItem={({item})=> {

                
                return(

                    <TouchableOpacity  onPress={()=>this.handlePress(item.id)} style={{minHeight:30,backgroundColor:'red'}}>
                    <Text>{item.name}</Text>
                    </TouchableOpacity >
                )

            }}
            
            
            
            />

<ScrollView style={{minHeight:200, backgroundColor:'skyblue'}}>

            {this.getProductListView()}
            </ScrollView >
        </View>
    )
}


}