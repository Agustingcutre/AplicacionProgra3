import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import {getData} from '../src/api/usuarios'

export class ScreenImportarTarjetas extends Component {

    constructor(props){
        super(props);
        
        this.state = {
          items: [],
          
        }
      }
    
      async getData() { 
        try { 
          const jsonUsers = await AsyncStorage.getItem("Usuarios");
          this.setState({usuariosImportados: Json.parse(jsonUsers)});
          return(jsonUsers)
        }
        catch(e){ 
          alert("No pudimos cargar los usuarios");

        }
      }

    
    

    render(){
      const mostrarUsuarios = this.state.usuariosImportados.map(items => 
       <Text> {items.name.title} {items.name.first} {items.name.last}</Text>
        )

        var {items} = this.state
        
        return(

            <TouchableOpacity onPress={this.getData.bind(this)}> Mostramos los valores importados</TouchableOpacity>

           
        )
    }
}