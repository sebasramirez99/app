import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useQuery} from 'react-query';

async function fetchUsers(){
    const response = await fetch('https://script.google.com/macros/s/AKfycbx8zNITk1CaYypyl7VJWToIDhMv15AKML-UTKN6a-RSfcS2slC3eXTsp5wD24gfLlIC/exec?pedido=Contra&contra=1995&usuario=leydi123')
    if (!response.ok){
        throw new Error('Error recuperando datos')
    }
    return response.text()
}

function Users(props){
    const query = useQuery('USERS', fetchUsers);
    return(
        <Text>{query.data}</Text>
    );

}

export default Users;