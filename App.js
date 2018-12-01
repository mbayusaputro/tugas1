 import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      text: 'When submited, the text here should change',
      text2:'',
    }
  }
  Submit(){
    this.setState({
      text:this.state.text2
    })  
  }
  render(){
    return(
    <View style={styles.container}>
      <View style={styles.t}>
          <Text>{this.state.text}</Text>
      </View>
      <View style={styles.f}>
      <TextInput
        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text2:text})}
        placeholder="Type Here"
      />
      <Button 
      title="Submit"
      onPress={()=>this.Submit()}
      />
      </View>
    </View>
    );
  }
}

const styles=StyleSheet.create({
  container : {
    flex: 1,
  },
  t : {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',    
  },
  f : {
    flex: 1,
    margin: 20,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',        
  }
});