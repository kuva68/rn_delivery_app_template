import React from "react";
import { StyleSheet } from "react-native";
import { Surface, Switch,Avatar,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
  
  export default function AvatarContainer(){
      return(
        <Surface style={styles.surface}>
          <Button icon="camera"style={{color:'black'}}>Press me</Button>
          <Switch/>
         
        </Surface>
      )
  }
  const styles = StyleSheet.create({
    surface: {
      flexDirection:"row",  
      padding: 8,
      height: 80,
      width: '90%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      elevation: 4,
     marginVertical : 10,
     borderRadius : 5
    },
  });