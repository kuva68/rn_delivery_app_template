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
  import MainScrollComponent from '../components/chapter_screen_components/main_scroll_component'
  import {setWater, setDiscount, setRecomendations} from '../reducer/home_reduser/home_reduser'
  
  import { useSelector, useDispatch } from "react-redux";
 
  export default function DetailScreen({navigation,route}){
      const dispatch = useDispatch()
      const {discount} = useSelector(state => state.home)
      const updateDiscount = ()=>{
        let arr = Array(5).fill('discount')
        dispatch(setDiscount([...discount,...arr]))
      }
      let {chapter} = route?.params??null
      
      return (
          <SafeAreaView style = {styles.safeArea}>
              
                <MainScrollComponent arr = {discount}
                                     fetchNext = {updateDiscount} 
                                     showDetail = {()=>console.log('show detail in recomendations')}
                                     updateDiscount = {updateDiscount}
                                     navigation = {navigation}
                                     chapter = {chapter}
                                     discountArr = {discount}/>
          </SafeAreaView>
      )
  }
  const styles = StyleSheet.create({
     safeArea : {
         justifyContent : 'flex-start',
         flex : 1
     },
     
  })