import React from "react";
import { useDispatch } from "react-redux";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
       
  } from 'react-native';
  import TouchableCard from "../components/main/account/TouchableCard";
  import {setSignIn} from '../reducer/registration_reducer/registration_reducer'
  import AsyncStorage from '@react-native-async-storage/async-storage';


  export default function SMSconfirm({navigation}){
    const dispatch = useDispatch()
    const [phoneNamber,setPhoneNamber] = React.useState([])
    const add = (n)=>setPhoneNamber(phoneNamber.length < 4 ? [...phoneNamber,n] : phoneNamber)
    const backSpace = ()=>setPhoneNamber(phoneNamber.length > 1? phoneNamber.slice(0,-1) : [])
    const  arrow = async () => {try {
         
      const jsonValue = JSON.stringify({data: signIn})
      await AsyncStorage.setItem('signIn', jsonValue)
      } catch (e) {
          console.log(e)
    }
         dispatch(setSignIn(true))
      }
      return (
          <SafeAreaView style={{flex : 1,justifyContent : 'space-between'}}>
            <Text style = {{margin : 10}}>
              Введите код подтверждения из СМС
            </Text>
          
            <View style={styles.inputView}>
              <View style = {styles.namberConteiner}>
                 <Text style = {styles.namberText}>{phoneNamber[0]?phoneNamber[0]:''}</Text>
              </View>
              <View style = {styles.namberConteiner}>
                 <Text style = {styles.namberText}>{phoneNamber[1]?phoneNamber[1]:''}</Text>
              </View>
              <View style = {styles.namberConteiner}>
                 <Text style = {styles.namberText}>{phoneNamber[2]?phoneNamber[2]:''}</Text>
              </View>
              <View style = {styles.namberConteiner}>
                 <Text style = {styles.namberText}>{phoneNamber[3]?phoneNamber[3]:''}</Text>
              </View>
            </View>
            <TouchableCard add = {add}backSpace ={backSpace}length = {phoneNamber.length}limit = {4}arrow = {arrow}/>
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
      width : '100%',
      justifyContent : 'space-evenly',
      alignItems : 'center',
      marginVertical : 35,
      flexDirection : 'row'
    },
    namberConteiner : {
       height :50,
       width :40,
       borderRadius : 15,
       justifyContent : 'center',
       alignItems : 'center',
       borderWidth : 0.2,
       borderColor : 'blue',
      
    },
    namberText : {
       fontSize : 18,
       color : 'blue'
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