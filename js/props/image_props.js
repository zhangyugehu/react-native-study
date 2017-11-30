import React, { Component } from 'react';
import {
    Image
} from "react-native";

export default class extends Component{
    render(){
        let pic={
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return <Image
            style={{width:200, height:100}}
            source={pic}/>
    }
}