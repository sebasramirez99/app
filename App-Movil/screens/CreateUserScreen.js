import React, {useState} from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import CustomisableAlert from "react-native-customisable-alert";
import firebase from '../database/firebase';
import { divide, Value } from 'react-native-reanimated';

const CreateUserScreen = (props) => {

    const [state, setState] = useState({
        nombre :'',
        apellido:'',
        departamento: '',
        usuario :'',
        contraseña: ''
    })

    const handleChangeText = (nombre, value)=>{
        setState({...state, [nombre]: value})
    }


    const addNewUser = async () => {
        if (state.nombre === ''){
            alert('Por favor, verifique el campo Nombre, ya que se encuentra vacío ')
            
        } else if (state.apellido === ''){
            alert('Por favor, verifique el campo Apellido, ya que se encuentra vacío ')
        }
        else if (state.departamento === ''){
            alert('Por favor, verifique el campo Departamento, ya que se encuentra vacío ')
        }
        else if (state.usuario === ''){
            alert('Por favor, verifique el campo Usuario, ya que se encuentra vacío ')
        }
        else if (state.contraseña === ''){
            alert('Por favor, verifique el campo Contraseña, ya que se encuentra vacío ')
        }else{
            try {
                await firebase.db.collection('users').add({
                    nombre :state.nombre,
                    apellido:state.apellido,
                    departamento:state.departamento,
                    usuario :state.usuario,
                    contraseña: state.contraseña
                }) 
                
                props.navigation.navigate('UsersList');
            } catch (error) {
                console.log(error);
            }
           
           
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre" onChangeText = {(value) => handleChangeText('nombre', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Apellido" onChangeText = {(value) => handleChangeText('apellido', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Usuario" onChangeText = {(value) => handleChangeText('usuario', value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Departamento" onChangeText = {(value) => handleChangeText('departamento', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput secureTextEntry={true} placeholder="Contraseña" onChangeText = {(value) => handleChangeText('contraseña', value)} />
            </View>
            <View style={styles.inputGroup} >
                <Button title="Save User" onPress={() => addNewUser() }/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        padding: 35
    },
    inputGroup:{
        flex: 1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    }
})

export default CreateUserScreen