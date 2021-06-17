import React, {useEffect, useState} from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import firebase from '../database/firebase';
import { divide } from 'react-native-reanimated';
import { ListItem, Avatar } from 'react-native-elements'


const UsersList = (props) => {
    
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

    return(
        <ScrollView>
            <Button title='Crear Usuario' onPress={() => props.navigation.navigate('CreateUserScreen')} />
            {
                users.map(user =>{
                    return (
                        <ListItem key={user.id} bottomDivider onPress={() => alert(
                            'Nombre completo : '+user.nombre+' '+user.apellido+'\n'+
                            'Usario : '+user.usuario+'\n'+
                            'Departamento : '+user.departamento
                        )}>
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>{user.nombre} {user.apellido}</ListItem.Title>
                                <ListItem.Title>{user.departamento}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

export default UsersList