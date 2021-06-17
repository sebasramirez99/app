import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

  const Stack  = createStackNavigator()
  const queryClient = new QueryClient();

import UsersList from './screens/UsersList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import Login from './screens/Login';
import qr from './screens/qr'
import Users from './Users';
  

function MyStack(){
  return(

    <Stack.Navigator>
      <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="CreateUserScreen" component={CreateUserScreen} />
      <Stack.Screen name="qr" component={qr} />
    </Stack.Navigator>
  )
};

export default function App() {
  return (
    
    <NavigationContainer >
      <MyStack />
    {/*  <QueryClientProvider  client={queryClient}>
        <Text style={styles.container2}>
          <Users />
        </Text>
      </QueryClientProvider>*/}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container2:{
    flex:1, 
    padding: 70
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


