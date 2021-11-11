import React from "react";
import { Button } from "react-native-paper";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


  export default function TouchableCard({add,backSpace,go,length,arrow,limit}){
      return(
        <View style = {styles.keyboard}>
        <View style = {styles.keyboardLine}>
          <View style = {styles.keyboardItem}>
            <TouchableHighlight underlayColor='blue' activeOpacity={0.3}  onPress={()=>add(1)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',borderRadius : 10}}>
              <Text style = {styles.keyboardText}> 1 </Text>
            </TouchableHighlight>
          </View>
          <View style = {styles.keyboardItem1}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={()=>add(2)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',borderRadius : 10}}>
              <Text style = {styles.keyboardText}> 2 </Text>
            </TouchableHighlight>                
          </View>
          <View style = {styles.keyboardItem}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={()=>add(3)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style = {styles.keyboardText}> 3 </Text>
            </TouchableHighlight>
          </View>
        </View>
    
      <View style = {styles.keyboardLine}>
          <View style = {styles.keyboardItem}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={()=>add(4)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style = {styles.keyboardText}> 4 </Text>
            </TouchableHighlight>
          </View>
          <View style = {styles.keyboardItem1}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={()=>add(5)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style = {styles.keyboardText}> 5 </Text>
            </TouchableHighlight>
          </View>
          <View style = {styles.keyboardItem}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={()=>add(6)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style = {styles.keyboardText}> 6 </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {styles.keyboardLine}>
          <View style = {styles.keyboardItem}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={()=>add(7)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style = {styles.keyboardText}> 7 </Text>
            </TouchableHighlight>
          </View>
          <View style = {styles.keyboardItem1}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={()=>add(8)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style = {styles.keyboardText}> 8 </Text>
            </TouchableHighlight>
          </View>
          <View style = {styles.keyboardItem}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={()=>add(9)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style = {styles.keyboardText}> 9 </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style = {styles.keyboardLine}>
          <View style = {styles.keyboardItem}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.3} onPress={backSpace}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Icon name="remove" size={30} color="#800" />
           </TouchableHighlight>
          </View>
          <View style = {styles.keyboardItem1}>
          <TouchableHighlight underlayColor='blue' activeOpacity={0.1} onPress={()=>add(0)}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',borderRadius : 5}}>
              <Text style = {styles.keyboardText}> 0 </Text>
            </TouchableHighlight>
          </View>
          <View style = {styles.keyboardItem}>
          {length === limit && <TouchableHighlight onPress = {arrow}underlayColor='blue' activeOpacity={1}
              style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center',borderRadius : 5}}>
              <Icon name="arrow-right" size={30} color="blue" />
                
            </TouchableHighlight>
  }
           </View>
        </View>
      </View>
      
      )}
  const styles = StyleSheet.create({
    keyboard : {
      width : '100%',
      justifyContent : 'flex-start',
      height : '40%',
     
    },
    keyboardLine : {
      flexDirection :'row',
      width : '100%',
      height : '25%',
      justifyContent : 'space-between',
      paddingHorizontal : 5
    },
    keyboardItem : {
      height : '100%',
      width : '20%',
      justifyContent : 'center',
      alignItems : 'center',
      borderRadius : 5
    },
    keyboardItem1 : {
      width : '20%',
      height : '100%',
      justifyContent : 'center',
      alignItems : 'center'
    },
    keyboardText : {
      fontSize : 20,
      color : '#666'
    },
    
  });