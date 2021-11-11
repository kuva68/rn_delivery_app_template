import React from "react";
import { Surface,Headline} from 'react-native-paper';
import {StyleSheet,TouchableHighlight} from 'react-native'

export default function MenuCard({show,title}){
    return(
            <TouchableHighlight onPress = {()=>show(title)}style = {{margin : 10}}>
               <Surface style = {styles.surface}>
                <Headline style = {styles.headline}>{title}</Headline>
               </Surface>
            </TouchableHighlight> 
            
              )
}
const styles = StyleSheet.create({
    
    surface : {
        backgroundColor : '#e2e2e2',
        justifyContent : 'center',
        alignItems : 'center',
        elevation : 4,
        margin : 5,
        borderRadius : 5,
        width : 80,
        height : 110
    },
    headline : {
        fontSize : 12,
        color : 'blue',
        textShadowColor : 'green',
        textShadowRadius : 0.5,
        textShadowOffset : {width : 0.5, height : 0.5}
    }
})