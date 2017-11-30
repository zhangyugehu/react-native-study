import React, {Component} from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import PlatformView from './PlatformView'

export default class extends Component{

    render(){
        return <View style={styles.platformStyle}>
            <PlatformView
                style={{flex:1}}/>
        </View>
    }
}

const styles=StyleSheet.create({
    platformStyle:{
        ...Platform.select({
            ios:{
                backgroundColor:'#000',
            },
            android:{
                backgroundColor:'#00f',
            }
        }),
    },
})