import React from "react"
import { Appbar,Headline,} from 'react-native-paper';
import {View,Pressable, useWindowDimensions , StyleSheet,Animated,Modal} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Svg, { Path } from 'react-native-svg';
  
export default function Modal1({close,status}){
    React.useEffect(()=>{
        console.log('modal')
    },[])
    
    return (
<Modal visible = {status} animationType = 'fade' onRequestClose = {close}transparent = {true}>
            <Pressable onPress = {close}style = {styles.pressable}>
               <Headline style = {styles.headline}>X</Headline>
            </Pressable>
            
 <Svg
  width="130"
  height="130"
  fill="blue" 
  viewBox="0 0 130 130"
  >
  <Path
    d="M 0 30 H 45 Q 50 30 , 50 25 C 55 0, 75 0, 80 25 Q 80 30, 85 30 H 130 V 130 H 0 Z"    
  />  
</Svg>
       </Modal>
    )
}
const styles = StyleSheet.create({
   
    pressable : {
        position :'absolute',
        top : 10,
        right : 10,
        width : 30,
        height : 30,
        justifyContent : 'center',
        alignItems : 'center'
    },
    headline : {
        fontSize : 20,
        color : '#000'
    }
  });