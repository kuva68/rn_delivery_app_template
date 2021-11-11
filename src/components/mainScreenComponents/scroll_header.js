import React from "react";
import { Appbar,Headline,Modal} from 'react-native-paper';
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ScrollHeader({title,link}){
    return(
        <View style = {styles.main}>
            <Headline style = {styles.headline}>{title}</Headline>
            <Icon name = "arrow-circle-o-right" size = {30}color = 'orange' onPress = {link}/>
        </View>
    )
}
const styles = StyleSheet.create({
main : {
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 5,
    alignItems : 'center'
},
headline : {
    fontSize : 14
}
})