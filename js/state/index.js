import React, { Component } from 'react';
import {
    View
} from "react-native";

import ShineText from './shine_text';

export default class extends Component{
    render(){
        return <View style={{flex:1, alignItems:'center'}} >
            <ShineText text="count >> "/>
        </View>
    }
}