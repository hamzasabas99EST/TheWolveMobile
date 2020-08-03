import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  name="The wolves" component={LoginForm} hea/>
      <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    /*<View style={styles.container}>
       
    <Text>Open Hey up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Home/>
    </View>*/
  );
}


/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
