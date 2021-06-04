// import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import { getData } from '../src/api/usuarios';


export default class ImportarTarjetas extends React.Component{ 
  constructor(props){
    super(props);
    
    this.state = {
      items: [],
      
    }
  }

  componentDidMount(){
    getData()
    .then( results => {
      console.log(results)
      this.setState({items:results});
    }
      )

  }

  async storeData(Usuarios, results){
    try{
      const jsonUsers = JSON.stringify(this.state.items);
      await AsyncStorage.setItem('Usuarios', jsonUsers);
      console.log("Almacenados con exito");
      alert("Almacenado con exito");
    }catch(e){
      console.log(e);
    }
  };

//   async getStringStorage(){
//     try{
// const jsonDetalle = await AsyncStorage.getItem('Usuarios');
// if(jsonDetalle !== null){
//   return(
// <Text> {items.name.title} {items.name.first} {items.name.last} </Text>
//   )
// }


  //   }
  //   catch{

  //   }
  // }

 render() {

  var {items} = this.state
  
 

  
    return ( 
      
      <View style={styles.container}> 
           {items.map (items => (
             <View >   
               < Text style={styles.claseUsuarios}> {items.name.title} {items.name.first} {items.name.last} </Text>
               

               
               <TouchableOpacity onPress={ () => {this.getStringStorage({items})}}> 
               <Text style={styles.verDetalle}>Ver detalle </Text>
               </TouchableOpacity>
               
             </View> 
            
          
           ))}
          <TouchableOpacity onPress={ () => this.storeData({items})} > 
               <Text style={styles.guardarItems}>Guardar Items</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => this.setState({items})} > 
               <Text style={styles.guardarItems}>Recuperar </Text>
           </TouchableOpacity>

           <TouchableOpacity onPress={ () => this.setState({items:[]})} > 
               <Text style={styles.guardarItems}>Eliminar </Text>
           </TouchableOpacity>
      </View>
      
    
      
    )
  }
 
 }
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    marginTop: 50,
    justifyContent: 'center',
    alignItems: "center",
  },
  claseUsuarios: {
    borderRadius: 15,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    display: "flex",
    width: "50%",
    margin: 7,
    
    
  },
  verDetalle: {
    backgroundColor: 'grey',
    

  },
  guardarItems: {
    backgroundColor: 'red',

  }
});

