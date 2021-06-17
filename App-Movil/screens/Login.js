import React, {useEffect, useState} from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import firebase from '../database/firebase';
import { divide } from 'react-native-reanimated';
import { ListItem, Avatar } from 'react-native-elements'


const Login = (props) => {
    const veri = [];
    const [users, setUsers] = useState([])

    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(querySnapshot =>{
            const users = [];

            querySnapshot.docs.forEach(doc => {
                const {nombre,apellido,departamento,usuario, contraseña} = doc.data()
                users.push({
                    id: doc.id,
                    nombre,
                    apellido,
                    departamento,
                    usuario, 
                    contraseña
                })
            });

            setUsers(users)
        });
    }, []);

    const[usulogin, setUsulogin] = useState({
        usuario :'',
        contraseña: ''
    })

    const handleChangeText = (campo, value)=>{
        setUsulogin({...usulogin, [campo]: value})
    }

    const verificar = () => {
        veri.splice(0, veri.length);
        if (usulogin.usuario === ''){
            alert('Por favor, verifique el campo Usuario, ya que se encuentra vacío ')
            
        } else if (usulogin.contraseña === ''){
            alert('Por favor, verifique el campo Nombre, ya que se encuentra vacío ')
        } else{
            users.map(user =>{
                if(usulogin.usuario === user.usuario && usulogin.contraseña === user.contraseña){
                        veri.push(user.usuario);
                        veri.push(user.contraseña);
                        veri.push(user.departamento);
              }
            })
            if(veri.length === 0){
                alert('Nombre de usuario o contraseña incorrectos')
            }else{
                if(veri[2]==='Admin'){
                    props.navigation.navigate('UsersList');
                }else{
                    props.navigation.navigate('qr');
                }
            }
            /*for (var i = 0; i < users.length ; i++) {
                if(usulogin.usuario === users.usuario[i] && usulogin.contraseña === users.contraseña[i]){
                      if(users.departamento==='Admin'){
                          props.navigation.navigate('UsersList');
                      }else{
                          props.navigation.navigate('');
                      }
                }else{
                  alert('Nombre de usuario o contraseña incorrectos')
                }
              }  */
              
        }
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Usuario" onChangeText = {(value) => handleChangeText('usuario', value)} />
            </View>
            <View style={styles.inputGroup}>
                <TextInput secureTextEntry={true} placeholder="Contraseña" onChangeText = {(value) => handleChangeText('contraseña', value)} />
            </View>
            <View style={styles.inputGroup} >
                <Button title="Ingresar" onPress={() => verificar() }/>
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
export default Login