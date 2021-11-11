import React from "react";
import { Appbar,Headline,Modal} from 'react-native-paper';
import {View,Pressable, useWindowDimensions , StyleSheet,Animated} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useSelector, useDispatch } from "react-redux";
import {setCarrentAdres} from '../../reducer/registration_reducer/registration_reducer'

export default function MainHeader({fadeAnim,open}){
  
  const adres = useSelector(state=>state.registration.carrentAdres)
  
  
  const dispatch = useDispatch()
    return (
      
<Appbar style = {{...styles.top,backgroundColor : 'white',shadowRadius : fadeAnim, shadowColor : 'orange',
                  shadowOffset : {width : 0, height : fadeAnim},
                  borderBottomWidth : 0.2, borderBottomColor : 'orange',position : 'absolute', top : 0, left : 0,right : 0,
                  shadowOpacity : 1,elevation : fadeAnim}}>
        
        <Appbar.Action icon="apps" onPress={() => console.log('Pressed mail')} />
        <Pressable style = {styles.presable} onPress = {open}>
           <View style = {styles.appBarView}>
              <Icon name = 'map-marker'size = {30}color = 'orange'/>
              <Headline style = {styles.headline}>{adres?adres:'select adres'}</Headline>
              <Icon name = "arrow-circle-o-right" size = {30}color = 'orange'/>
           </View>
           </Pressable>
        <Appbar.Action
           icon="archive"
           onPress={() => console.log('Pressed archive')}
        />
        
       
      </Appbar>
      
        
    )
}

const styles = StyleSheet.create({
    top: {
      justifyContent : 'space-between',
      zIndex : 1000
    },
    presable : {
        width : '50%'
    },
    appBarView : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
        alignItems : 'center'
       },
    headline : {
        fontSize : 15,
        color : 'orange'
    },
    modal : {
      width : '100%',
      height : '100%'
    }   
,
    modalContainer : {
      width : '100%',
     
      justifyContent : 'flex-end',
      alignItems : 'center'
    }  
  });