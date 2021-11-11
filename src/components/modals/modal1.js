import React,{useRef, useState} from "react";
import {
    Pressable,
    View ,
    Text ,
    Modal,
    StyleSheet,
    ImageBackground
  } from 'react-native';
  import { Checkbox,Button, Headline } from 'react-native-paper'
  import { useDispatch } from "react-redux";
export default function Modal1({open,modalClose,adresArr,carrentAdres, setCarrentAdres}){
    const dispatch = useDispatch()
    return (
        <Modal visible = {open} animationType = 'slide' onRequestClose = {modalClose}transparent = {true}
               style = {styles.modal}>
            
           <ImageBackground blurRadius = {13} 
                            style = {{position : 'absolute', top : 0, left : 0, bottom : 0, right : 0,backgroundColor : 'rgba(0,0,0,0.4)'}}>
                <View style = {styles.modalView}>
            <View style = {styles.radiusView}>
              <Button onPress = {modalClose}style = {styles.pressable1}mode = 'text'>
               <Text style = {styles.headline}>X</Text>
              </Button> 
             </View>  
               <View style = {styles.headlineView}>
                  <Headline>Выберите адрес</Headline>
               </View>
               
             {Array.isArray(adresArr) && adresArr?.length > 0 &&  adresArr?.map((el,i)=>{
                 return (
                     <View style = {styles.adresView}key = {el + i}>
                       <Text style = {styles.adresModalText}>{el}</Text>
                       <Checkbox status = {el === carrentAdres ? 'checked' : 'unchecked'}
                                 onPress = {()=>{el !== carrentAdres && dispatch(setCarrentAdres(el))}}
                                 color = {el !== carrentAdres?'#666':'orange'}
                        />
                     </View>
                 )
             })}
               <Button style = {styles.modalButton}mode="contained"labelStyle = {styles.adresModalText}
                       color = 'orange'>
                  Новый адрес
               </Button>
               
            </View>
           </ImageBackground>
            
       </Modal>
    
    )
}
const styles = StyleSheet.create({
    modalView : {
        position :'absolute',
        left : 0,
        right : 0,
        bottom : 0,
        backgroundColor : 'white',
        height : '45%',
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20,
        justifyContent : 'flex-start',
        alignItems : 'center',
        paddingTop : 40,
        
    },
    radiusView : {
        position : 'absolute',
        top : -20,
        left : '35%',
        height : 80,
        width : '30%',
        borderTopRightRadius : 50,
        borderTopLeftRadius : 50,
        justifyContent : 'flex-start',
        alignItems : 'center',
        backgroundColor : 'white',
        paddingTop : 3
    },
    pressable1 : {
        justifyContent : 'center',
        alignItems : 'center',
        height : '100%',
        width : '100%'
    },
    adresView : {
        flexDirection : 'row',
        width : '80%',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    check : {
        color : 'blue'
    },
    adresModalText : {
        fontSize : 14,
        color : 'blue'
    },
    modalButton : {
        position : 'absolute',
        bottom : 20,
        left : '20%',
        width : '60%',
        borderRadius : 10,
        elevation : 5
    },
    headlineView : {
        justifyContent : 'center',
        alignItems : 'center',
        width : '80%'
    },
    modal : {
        height : '100%',
        width : '100%'
    },
    pressable : {
        position :'absolute',
        top : 10,
        right : 10,
        width : 30,
        height : 30,
        justifyContent : 'center',
        alignItems : 'center'
    },
    headline : {
        fontSize : 20,
        color : 'orange'
    },
})