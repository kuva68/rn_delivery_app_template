import React from "react";
import { View , Text, StyleSheet } from "react-native";
  
  export default function Header(){
      return(
        <View style = {styles.header}>
          <Text style = {styles.headerText}>
          Добро пожаловать
          </Text>
          <Text style = {styles.h1}>
          Заполните форму, чтобы стать нашим клиентом
          </Text>
        </View>
      )
  }
  const styles = StyleSheet.create({
   header : {
     alignItems : 'flex-start',
     margin : 10,
     
   },
   headerText : {
     color : '#999',
     fontSize : 12,
     marginVertical : 6
   },
   h1 : {
     fontSize : 16,
    fontWeight : '400',
     color : '#666'
   }
  })