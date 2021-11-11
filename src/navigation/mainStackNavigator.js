import {NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useEffect} from 'react';
import MainScreen from '../screens/main_screen';
import AccountScreen from '../screens/Account';
import SMSconfirm from '../screens/smsconfirm'
import ChapterScreen from '../screens/chapter_screen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import {setPhone, setAdreses, setCarrentAdres, setSignIn} from '../reducer/registration_reducer/registration_reducer'
import ProductScreen from '../screens/product_screen';
import DiscountScreen from '../screens/discount_screen';
import DiscountProductScreen from '../screens/discount_product_screen';
export default function MainNavigator() {
  const dispatch = useDispatch()
  const {phone,
         adreses,
         carrentAdres,
         signIn} = useSelector(state => state.registration)
  const Stack = createNativeStackNavigator();
  
  useEffect(() => {
    async function fetchStorage(){
      try {
        const phoneValue = await AsyncStorage.getItem('adreses')
        console.log('==========phonevalue',phoneValue)
        if(phoneValue !== null) {
          let json = JSON.parse(phoneValue)
          json?.data && Array.isArray(json?.data) && dispatch(setPhone(json?.data))
        }
      } catch(e) {
        console.log(e)
      }
      try {
        const adresesValue = await AsyncStorage.getItem('phone')
        if(adresesValue !== null) {
          let json = JSON.parse(adresesValue)
          json?.data && Array.isArray(json?.data) && dispatch(setAdreses(json?.data))
        }
      } catch(e) {
        console.log(e)
      }
      try {
        const carrentAdresValue = await AsyncStorage.getItem('carrentAdres')
        if(carrentAdresValue !== null) {
          let json = JSON.parse(carrentAdresValue)
          json?.data && dispatch(setCarrentAdres(json?.data))
        }
      } catch(e) {
        console.log(e)
      }
      try {
        const signInValue = await AsyncStorage.getItem('signIn')
        console.log('======signin',signInValue)
        if(signInValue !== null) {
          let json = JSON.parse(signInValue)
          json.data && dispatch(setSignIn(json.data))
        }
      } catch(e) {
        console.log(e)
      }
  
    }
    fetchStorage()
        
  },[])
  
  return (
  <NavigationContainer>
      <Stack.Navigator initialRoutName="Registration"
                       screenOptions = {{animationEnabled : true}}>
      {signIn ?  <Stack.Group>
                     <Stack.Screen name='MainScreen' component={MainScreen}options={{headerStyle:{
                      backgroundColor : 'white'},
                      headerTintColor : '#666',
                      headerTitleStyle : {
                      color : 'black'
                      }}}/>
                    <Stack.Screen name = 'Chapter' 
                                  component = {ChapterScreen}
                                  options = {({route})=>({title : route.params.chapter})}
                    />
                    <Stack.Screen name = 'Product'
                                  component = {ProductScreen}
                                  options = {{title : ''}}
                                  />
                    <Stack.Screen name = 'Discount'
                                  component = {DiscountScreen}
                                  options = {{title : 'Discount'}}
                                  />
                    <Stack.Screen name = 'DiscountProduct'
                                  component = {DiscountProductScreen}
                                  options = {{title : ''}}
                                  />
              </Stack.Group>:<Stack.Group>
                  <Stack.Screen name='Account' 
                                component={AccountScreen}
                                options={{headerStyle:{
                                                       backgroundColor : 'white'},
                                                       headerTintColor : '#666',
                                                       headerTitleStyle : {color : 'black'}
                                                       }}
                      />
                  <Stack.Screen name = 'SMS confirm'
                                component={SMSconfirm}
                                options = {{headerStyle:{ backgroundColor : 'white',
                                                          headerTintColor : '#666',
                                                          headerTitleStyle : {color : 'orange'}
                                                         }
                                                         }}
                      />
                </Stack.Group>}
             
            

    </Stack.Navigator>
  </NavigationContainer>
    )
}