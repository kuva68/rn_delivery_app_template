import React from "react";
import { Surface,Headline,Button} from 'react-native-paper';
import {FlatList,StyleSheet,Pressable,View} from 'react-native'
import FlatListHeader from "./flatlist_header";

export default function ScrollComponent({arr,
                                         fetchNext,
                                         showDetail,
                                         chapter,
                                         discountArr,
                                         updateDiscount,
                                         navigation,
                                         product}){
    return(
  <FlatList  contentContainerStyle = {styles.container}
             columnWrapperStyle = {styles.columnRapper}
             style = {{flex : 1}}
             onEndReached = {fetchNext}
             onEndReachedThreshold = {0.5}
             numColumns = {2}
             data = {arr}
             ListHeaderComponent = {<FlatListHeader chapter = {chapter} 
                                                    discountArr = {discountArr} 
                                                    updateDiscount = {updateDiscount}
                                                    product = {product??null}
                                                    navigation = {navigation} />}
             ListEmptyComponent = {<View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                                       <Headline>No internet</Headline>
                                   </View>}
             renderItem = {({item,index})=>{return (        
    <Surface style = {styles.Surface}key = {item + index}>
        <View style = {styles.SurfaceCoverView}></View>
        <Headline style = {styles.headline}>{item +':'+ index}</Headline>   
        <View style = {styles.actions}>
            <Headline style = {styles.price}>price</Headline>
            <Button mode = 'contained'labelStyle = {styles.label} compact style = {styles.compactButton}color = 'orange'>+</Button>
        </View>
    </Surface>
                
          )}}>
  
  </FlatList>
    )
}
const styles = StyleSheet.create({
    container : {
       alignContent : 'space-around'
    },
    columnRapper : {
        
        justifyContent : 'space-evenly'
    },
    Surface : {
        flexDirection : 'column',
        backgroundColor : '#e2e2e2',
        justifyContent : 'flex-start',
        alignItems : 'center',
        margin : 5,
        borderRadius : 5,
        height : 200,
        width : '45%',
        
    },
    headline : {
        fontSize : 11,
        color : 'blue',
        textShadowColor : 'green',
        textShadowRadius : 0.5,
        textShadowOffset : {height : 0.5, width : 0.2},
        lineHeight : 12,
        textAlign : 'center'
    },
    SurfaceCoverView : {
        width : '100%',
        height : '60%',
        backgroundColor : 'white',
        marginBottom : 7,
        borderTopRightRadius : 5,
        borderTopLeftRadius : 5
    },
    price : {
        fontSize : 13,
        color : 'orange'
    },
    compactButton : {
        borderRadius : 15,
        height : 30,
        width : 30,
        padding : 0
    },
    label : {
        color : 'white',
        fontSize : 13,
        textAlign : 'center',
        margin : 0,
        lineHeight : 13
        
    },
    actions : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        width : '100%',
        padding : 5
    }
})