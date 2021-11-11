import React,{useRef, useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Animated,
    Pressable,
    View ,
    Text ,
    Modal
  } from 'react-native';
  import Modal1 from "../components/modals/modal1";
  import {setWater, setDiscount, setRecomendations} from '../reducer/home_reduser/home_reduser'
  import {setPhone, addAdres, setCarrentAdres, setSignIn} from '../reducer/registration_reducer/registration_reducer'
  import { Surface, Checkbox,Button, Headline } from 'react-native-paper'
  import ScrollHeader from "../components/mainScreenComponents/scroll_header";
  import { useSelector, useDispatch } from "react-redux";
  import MainHeader from "../components/mainScreenComponents/header";
  import ScrollComponent from "../components/mainScreenComponents/scroll_component";
  import MenuCard from "../components/mainScreenComponents/menu_card";
  
  export default function MainScreen ({navigation}){
      const adresArr = useSelector(state=>state.registration.adreses)
      const carrentAdres = useSelector((state)=>state.registration.carrentAdres)
      const fadeAnim = useRef(new Animated.Value(0)).current;
      const runScroll = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 20,
            duration: 50,
            useNativeDriver : false
          }).start();
      }
      const stopScroll = ()=>{
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver : false
          }).start();
      }
      const [open, setOpen] = useState(false)
      modalOpen = ()=>{console.log('===modal open')
          setOpen(true)}
      modalClose = ()=>setOpen(false)
      const {dishes,recommendations, water, discount} = useSelector(state => state.home)
      const dispatch = useDispatch()
      
      return (
    <SafeAreaView style = {styles.safearea}>
        

            <Modal1 open = {open} 
                    modalClose = {modalClose} 
                    adresArr = {adresArr}
                    carrentAdres = {carrentAdres} 
                    setCarrentAdres = {setCarrentAdres}/>
            <MainHeader fadeAnim = {fadeAnim}open = {modalOpen}carrentAdres = {carrentAdres}/>
           
            <ScrollView contentContainerStyle = {styles.scroll}style = {{flex : 1}}
            onMomentumScrollBegin = {runScroll}
                onMomentumScrollEnd= {stopScroll} >
            <ScrollView contentContainerStyle = {styles.scroll1}horizontal style = {{flex : 1}}>
              {dishes.map((el,i)=>{
                  return(
                      <Surface key={el + i}style = {styles.surface}>

                      </Surface>
                  )
              })}
            </ScrollView>
            <ScrollHeader title = 'Рекомендации'link = {()=>navigation.navigate('Chapter',{chapter : 'Recomendations'})}/>
            <ScrollComponent arr = {recommendations}fetchNext = {()=>{
                let tmp = Array(5).fill('recomendations')
                dispatch(setRecomendations([...recommendations,...tmp]))
                }} showDetail = {()=>console.log('show detail in recomendations')}/>

            <ScrollHeader title = 'Water'link = {()=>navigation.navigate('Chapter',{chapter : 'water'})}/>
            <ScrollComponent arr = {water}fetchNext = {()=>{
                let tmp = Array(5).fill('water')
                dispatch(setWater([...water,...tmp]))
                }} showDetail = {()=>console.log('show detail in recomendations')}/>

            <ScrollHeader title = 'Discount'link = {()=>navigation.navigate('Discount')}/>
            <ScrollComponent arr = {discount}fetchNext = {()=>{
                let arr = Array(5).fill('discount')
                dispatch(setDiscount([...discount,...arr]))
                }} showDetail = {()=>console.log('show detail in recomendations')}/>
            <View style = {styles.menuView}>
              <MenuCard title = 'water'show = {()=>navigation.navigate('Chapter',{chapter : 'water'})}/>
              <MenuCard title = 'vegetable'show = {()=>navigation.navigate('Chapter',{chapter : 'vegetable'})}/>
              <MenuCard title = 'milk'show = {()=>navigation.navigate('Chapter',{chapter : 'milk'})}/>
              <MenuCard title = 'drink'show = {()=>navigation.navigate('Chapter',{chapter : 'drink'})}/>
              <MenuCard title = 'sweets'show = {()=>navigation.navigate('Chapter',{chapter : 'sweets'})}/>
              <MenuCard title = 'discount'show = {()=>navigation.navigate('Chapter',{chapter : 'discount'})}/>

            </View>
            </ScrollView>
          </SafeAreaView>
      )
  }
  const styles = StyleSheet.create({
      safearea : {
          flex : 1,
          justifyContent : 'flex-start',
          
      },
      scroll : {
          marginTop : 80,
          justifyContent : 'flex-start',
          alignItems : 'center',
          paddingBottom : 100
      },
      scroll1 : {
          flexDirection : 'row',
          justifyContent : 'flex-start',
          alignItems : 'center'
      }
      ,
      surface : {
          height : 110,
          width : 80,
          backgroundColor : '#g0e9h2',
          elevation : 4,
          margin : 5,
          borderRadius : 10
      },
      menuView : {
          flexDirection : 'row',
          flexWrap : 'wrap',
          width : '100%',
          padding : 5,
          justifyContent : 'space-around',
          alignItems : 'flex-start',
          alignContent : 'center'
      },
      
    
    
  })