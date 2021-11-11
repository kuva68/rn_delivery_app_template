import React from "react";
import { StyleSheet,View } from "react-native";
  import { Surface, Text } from 'react-native-paper';
  export default function AccountSecondContainer(){
      return(
        <Surface style={styles.surface}>
          <View style={styles.view}>
            <Text style={styles.text}>Surface</Text>
            <Text style={styles.text}>Surface</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Surface</Text>
            <Text style={styles.text}>Surface</Text>
          </View>
        </Surface>
      )
  }
  const styles = StyleSheet.create({
    
  });