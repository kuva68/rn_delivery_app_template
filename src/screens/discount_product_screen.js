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
  import MainScrollComponent from '../components/discount_screen/main_scroll'
  import {setWater, setDiscount, setRecomendations} from '../reducer/home_reduser/home_reduser'
  
  import { useSelector, useDispatch } from "react-redux";
 
  export default function DiscountProductScreen({navigation,route}){
      const dispatch = useDispatch()
      const {discount} = useSelector(state => state.home)
      const updateDiscount = ()=>{
        let arr = Array(5).fill('discount')
        dispatch(setDiscount([...discount,...arr]))
      }
      let {chapter,product} = route?.params??null
      
      return (
          <SafeAreaView style = {styles.safeArea}>
              
                <MainScrollComponent arr = {discount}
                                     fetchNext = {updateDiscount} 
                                     showDetail = {()=>console.log('show detail in recomendations')}
                                     navigation = {navigation}
                                     chapter = {chapter}
                                     product = {product}
                                     />
          </SafeAreaView>
      )
  }
  const styles = StyleSheet.create({
     safeArea : {
         justifyContent : 'flex-start',
         flex : 1
     },
     
  })