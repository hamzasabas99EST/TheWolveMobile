import React, { Component } from 'react'
import {AsyncStorage, Text, View,Image } from 'react-native'

import ball from '../images/ball1.png'
import {Input, Button } from 'react-native-elements';
import axios from 'axios';
import ipAdress from '../AdressIp'
export class LoginForm extends Component {
   
    constructor(props){
        super(props);
        this.state={
            email:'',
            motPass:'',
            message:''
        }
    }

    check=async()=>{

        const client={
            email:this.state.email,
            motdepass:this.state.motPass
        }
      /*  try {
            await 
            const value = await AsyncStorage.getItem('name');
            console.log(value)
          } catch (error) {
            // Error saving data
          }*/
        
          axios.post(ipAdress+`/clients/login`,client)
        .then( async(res)=>{ 
            if(res.status===200){
                try {
                    await AsyncStorage.setItem('Name',res.data.login.Nom+' '+res.data.login.Prenom);
                    //await AsyncStorage.setItem('idVille',res.data.login.idVille);
                    this.props.navigation.navigate('Home')
                }
                 catch (error) {
                    // Error saving data
                  }
                }
        })
        .catch(err=>{
               if(err.response.data.errPass){
                   this.setState({
                       message:err.response.data.message,
                     
                   }) 
               }else {
                   this.setState({
                   message:err.response.data.message,
                  
   
               }) 
           }
           }
        );
    }
       
       
    

    render() {
        return (
            <View style={{ flex: 2, alignItems: 'center',margin:60 }}>
                
                <Image
                    style={{width:90,height:90}}
                    source={ball}
                />
                <Text style={{color:'red'}}> {this.state.message}</Text>
                <Input
                    placeholder='Email'
                    style={{ width:300,height: 40, borderColor: 'gray', borderWidth: 1,fontSize:20, margin:15 }}
                    onChangeText={(email)=>this.setState({email})}
                    value={this.state.email}
                /> 
                <Input
                    placeholder='Mot de passe'
                    style={{ width:300,height: 40, borderColor: 'gray', borderWidth: 1,fontSize:20 }}
                    onChangeText={(motPass)=>this.setState({motPass})}
                    value={this.state.motPass}
                    secureTextEntry={true}
                />

                <Button style={{width:150,margin:10}}
                 title="Connexion"
                 onPress={this.check}
                 /> 


            </View>
           
        )
    }
}

export default LoginForm
