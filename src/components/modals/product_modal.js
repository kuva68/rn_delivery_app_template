import React,{useRef, useState} from "react";
import {
    Pressable,
    View ,
    Text ,
    Modal,
    StyleSheet,
    ImageBackground
  } from 'react-native';
  import { Checkbox,Button, Headline,Paragraph } from 'react-native-paper'
  import { useDispatch } from "react-redux";
  import ImageCarousel from 'react-native-image-carousel'
export default function Modal1({open,modalClose,productName}){
    const dispatch = useDispatch()
    return (
        <Modal visible = {open} 
               animationType = 'slide' 
               onRequestClose = {modalClose}
               transparent = {true}
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
               
               <ImageCarousel   
                  ref={}
                  renderContent={}
                  renderHeader={}
                  renderFooter={}
                >
                  {urls.map((url) => (
                 <Image
                   key={url}
                   style={styles.image}
                   source={{ uri: url, height: 100 }}
                   resizeMode={'contain'}
                 />
          ))}
                </ImageCarousel>
                <View style = {{width : '100%'}}>
                    <Headline>
                        {productName}
                    </Headline>
                </View>
                <Paragraph> product description </Paragraph>
                <View style = {styles.plusMinus}>
                    <View style = {styles.minus}><Headline>-</Headline></View>
                    <View style = {styles.qwountAndPrice}>
                        <Headline>{qwont} * {price}</Headline>
                    </View>
                    <View style = {styles.plus}>
                        <Headline >+</Headline>
                    </View>
                </View>
                <Button style = {styles.modalButton}mode="contained"labelStyle = {styles.adresModalText}
                       color = 'orange'>
                  add to busket
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
        height : '85%',
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