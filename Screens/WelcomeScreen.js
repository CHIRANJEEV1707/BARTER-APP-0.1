import * as React from 'react'
import {View,Text,TouchableOpacity,TextInput, StyleSheet} from 'react-native'

export default class WelcomeScreen extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
        }
    }

    render(){
        return(
            <View style={styles.App}>

            <Text style={styles.text}>THE BARTER APP</Text>

            <Text style={{color:'white',fontSize:20}}>WHERE EXCHANGING GOODS BECOME EASY!</Text>

            <TextInput
            style={{color:'white', fontSize:15,marginTop:100}}
            placeholder='ENTER E-MAIL!'
            value={this.state.email}
            />

            <TextInput
            style={{color:'white', fontSize:15,marginTop:50}}
            placeholder='ENTER PASSWORD!'
            value={this.state.password}
            />

            <TouchableOpacity
            style={{fontSize:15,fontWeight:'bold'}}>
                <Text style={{color:'white',alignSelf:'center',marginTop:20,fontSize:15}}>
                    LOGIN!
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{fontSize:15,fontWeight:'bold'}}>
                <Text style={{color:'white',alignSelf:'center',marginTop:20,fontSize:15}}>
                    SIGN UP!
                </Text>
            </TouchableOpacity>

            </View>
        )
    }
}

const styles=StyleSheet.create({
App:{
backgroundColor:"lime"
},

text:{
    color:"white",
    fontWeight:'bold',
    fontSize:50,
    marginTop:-300,
}
})