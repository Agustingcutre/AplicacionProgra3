// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground} from 'react-native';




export default class App extends React.Component{ 
  constructor(props){
    super(props);
    
    this.state = {
      items: [],
      
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=20")
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      this.setState({
        items: respuesta.results,
        
      })
    })

  }



 render() {

  var {items} = this.state

    return ( 
      <View className= "container"> 
           {items.map (items => (
             <View>   
               <Text className="usuarios"> {items.name.title} {items.name.first}  </Text>
               
             </View> 
          
           ))}

      </View>
      
    )
  }
 
 }
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
