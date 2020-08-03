import React, { Component } from 'react'
import { AsyncStorage,Text, View } from 'react-native'

export class Home extends Component {
  
  constructor(props){
    super(props);
    this.state={
        Name:''
    }
}
  

 componentDidMount=async()=>{
  var token = await AsyncStorage.getItem('Name');
  console.log(token);
  this.setState({
    Name:token
})
}
  render() {
    return (
      <View>
        <Text> helle {this.state.Name}</Text>
      </View>
    )
  }
}

export default Home
