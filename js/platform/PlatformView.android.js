import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform } from 'react-native';

export default class extends Component{

    render(){
        return <View>
            <Text style={{color:'#fff'}}>{
`I'm Android Platform.
OS version: ${Platform.Version}`
            }</Text>
        </View>
    }
}
