import React from "react";
import {
    SafeAreaView,
    TextInput,
    Text,
    StyleSheet,
    useColorScheme,
    View,
    TouchableOpacity,
    TouchableHighlight,
    
  } from 'react-native';
  import TouchableCard from "../components/main/account/TouchableCard";
  import Header from '../components/header/header'
import { useSelector,useDispatch } from "react-redux";
import { setPhone } from "../reducer/registration_reducer/registration_reducer";

  export default function AccountScreen({navigation}){
    const dispatch = useDispatch()
    const phoneNamber = useSelector((state) => state.registration.phone)
    const save = async (n) => {
      try {
         
        const jsonValue = JSON.stringify({data:[...phoneNamber,n] })
        await AsyncStorage.setItem('phone', jsonValue)
        } catch (e) {
            console.log(e)
      }
           dispatch(setPhone([...phoneNamber,n]))
        }
    
    const add = (n)=>{phoneNamber.length === 9?save(n):phoneNamber.length < 9 ? dispatch(setPhone([...phoneNamber,n])) : dispatch(setPhone(phoneNamber))}
    const backSpace = ()=>phoneNamber.length > 1? dispatch(setPhone(phoneNamber.slice(0,-1))) : dispatch(setPhone([]))
    const arrow = () => navigation.navigate('SMS confirm')
      return (
          <SafeAreaView style={{flex : 1,justifyContent : 'space-between'}}>
            
            <Header/> 
            <View style={styles.inputView}>
              <Text style = {styles.phoneText1}> +7 </Text>
              <Text style = {styles.phoneText1}>(</Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 0 ? phoneNamber[0]:'_'} </Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 1 ? phoneNamber[1]:'_'} </Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 2 ? phoneNamber[2]:'_'} </Text>
              <Text style = {styles.phoneText1}>)</Text>
              <Text style = {styles.phoneTextDivider}></Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 3 ? phoneNamber[3]:'_'} </Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 4 ? phoneNamber[4]:'_'} </Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 5 ? phoneNamber[5]:'_'} </Text>
              <Text style = {styles.phoneTextDivider}></Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 6 ? phoneNamber[6]:'_'} </Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 7 ? phoneNamber[7]:'_'} </Text>
              <Text style = {styles.phoneTextDivider}></Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 8 ? phoneNamber[8]:'_'} </Text>
              <Text style = {styles.phoneText2}>{phoneNamber?.length > 9 ? phoneNamber[9]:'_'} </Text>
            </View>
            <TouchableCard add = {add}backSpace ={backSpace}length = {phoneNamber?.length}limit = {10}arrow = {arrow}/>
            <View style = {styles.footer}>
              <Text style = {styles.footerText}>
                Продолжая авторизацию, вы соглашаетесь с 
              </Text>
              <TouchableOpacity >
                <Text style = {styles.TouchableOpacityText}>
                  пользовательским соглашением
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
      )
  }
  const styles = StyleSheet.create({
    inputView : {
      flexDirection : 'row',
      width : '100%',
      justifyContent : 'center',
      alignItems : 'center',
      marginVertical : 35,
    },
    phoneText1 : {
      fontSize : 20,
      color : 'blue',
      marginHorizontal : 5
    },
    phoneText2 :{
      fontSize : 20,
      color : 'blue',
      marginHorizontal : 0
      
    }    ,
    phoneTextDivider : {
      marginHorizontal : 3
    },
    footer : {
      width : '100%',
      justifyContent : 'center',
      alignItems : 'center',
      marginBottom : 5
     
    },
    footerText : {
      fontSize : 12,
      color : '#666'
    },
    TouchableOpacityText : {
      fontSize : 10,
      color : 'blue'    }
  })