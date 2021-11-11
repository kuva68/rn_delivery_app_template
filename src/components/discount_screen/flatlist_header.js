import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Chip, Headline} from 'react-native-paper'

export default function FlatListHeader({chapter, navigation, product}){
    let subChapterArr = ['milk','cheese','bread','meat','water','wine','drink']
    
    return (
        <View style = {styles.container}>
            {product && <View style = {styles.titleView}>
                  <Headline>{chapter}</Headline>
              </View>}
              <View style = {styles.chaptersView}>
                  {subChapterArr?.map((el,i)=>{
                      return(
                 <Chip style = {styles.chip} 
                       onPress={() => navigation.navigate('DiscountProduct',{chapter : 'Discount', product : el})}
                       key = {el + i}>{el}</Chip>
                      )
                  })}                
                </View>
               
                {product && <Headline> {product}</Headline>}
        </View>
    )
}
const styles = StyleSheet.create({
    
    titleView : {
        justifyContent : 'center',
        alignItems : 'flex-start',
        width : '100%'
        
    },
    chaptersView : {
       flexDirection : 'row',
       justifyContent : 'space-around',
       flexWrap : 'wrap',
    },
    chip : {
        backgroundColor : '#e7e7e7'
    },
    container : {
        width : '100%',
        justifyContent : 'flex-start',
        padding : 5
    }
 })