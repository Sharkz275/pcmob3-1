import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./BlockRGB";
import { useState} from "react"

function HomeScreen() {
  
  const [colorArray, setColorArray] = useState ([
    { red: 255, green: 0, blue: 0, id: "0"}
  ]);

  function renderItem({item}) {
    return<BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  function addColor() {
    setColorArray([
      
      {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        id: `${colorArray.length}`,
      },
      ...colorArray,
    ]);
  }
 
  function resetColor() {
    setColorArray([]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addColor}>
        <Text>Add Colour</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetColor}>
        <Text>Reset Colour</Text>
      </TouchableOpacity>
      <FlatList 
        data={colorArray}
        renderItem={renderItem}
        style={{width: "100%"}}
      />
    </View>
  );
 
}

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
