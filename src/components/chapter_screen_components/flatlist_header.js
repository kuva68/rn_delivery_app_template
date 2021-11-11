import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Chip, Headline} from 'react-native-paper'
import ScrollComponent from '../mainScreenComponents/scroll_component' 
import ScrollHeader from '../mainScreenComponents/scroll_header'
export default function FlatListHeader({chapter,discountArr,updateDiscount,navigation,product}){
    let subChapterArr = ['chapter1','chapt','chpter2','ch','chpt','cha','chap']
    
    return (
        <View style = {styles.container}>
            {product && <View style = {styles.titleView}>
                  <Headline>{chapter}</Headline>
              </View>}
              <View style = {styles.chaptersView}>
                  {subChapterArr?.map((el,i)=>{
                      return(
                 <Chip style = {styles.chip} 
                       onPress={() => navigation.navigate('Product',{chapter : chapter, product : el})}
                       key = {el + i}>{el}</Chip>
                      )
                  })}                
                </View>
                <ScrollHeader title = 'Discount' link = {()=>navigation.navigate('Discount')} />
                <ScrollComponent arr = {discountArr}fetchNext = {updateDiscount}
                   showDetail = {()=>console.log('show detail in recomendations')}/>
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