import React from "react";
import { Surface,Headline} from 'react-native-paper';
import {FlatList,StyleSheet,TouchableHighlight} from 'react-native'

export default function ScrollComponent({arr,fetchNext,showDetail}){
    return(
  <FlatList horizontal contentContainerStyle = {styles.container} style = {{flex : 1}}
     onEndReached = {fetchNext} onEndReachedThreshold = {0.5}
     data = {arr}renderItem = {({item,index})=>{return (
        <TouchableHighlight onPress = {()=>showDetail(item)}key = {item + index}style = {{borderRadius : 10}}
                            underlayColor = 'blue' >
           <Surface style = {styles.surface}key = {item + index}>
            <Headline style = {styles.headline}>{item +':'+ index}</Headline>
           </Surface>
        </TouchableHighlight> 
        
          )}}>
  
  </FlatList>
    )
}
const styles = StyleSheet.create({
    container : {
        flexDirection :'row',
        justifyContent : 'flex-start',
        flexWrap : 'nowrap'
    },
    surface : {
        backgroundColor : '#e2e2e2',
        justifyContent : 'center',
        alignItems : 'center',
        elevation : 2,
        margin : 5,
        borderRadius : 5,
        height : 150,
        width : 110
    },
    headline : {
        fontSize : 11,
        color : 'blue',
        textShadowColor : 'green',
        textShadowRadius : 0.5,
        textShadowOffset : {height : 0.5, width : 0.2}
    }
})