import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import * as firebase from 'firebase'
import { mainBackground , white } from '../utils/styles/Colors'
class WelcomeScreen extends Component {

    

    

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}> Gradesk </Text>
            
                <Button title="Sign In" onPress={() => this.props.navigation.navigate('SignIn')} > Sign In </Button>
                <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} > Sign Up </Button>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding : 20,
        backgroundColor : mainBackground,
    }, text: {
        color: white,
        fontWeight : '700',
        fontSize: 70,
        textAlign: 'center',
        paddingBottom: 80,
    }, button: {

    }
});