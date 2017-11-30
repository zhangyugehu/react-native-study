import React, { Component } from 'react';
import {
    View,
    Text
} from "react-native";

export default class extends Component{
    render(){
        return <View style={styles.container}>
            <OneComponent show_text="哈哈哈"/>
            <OneComponent show_text="呵呵呵"/>
            <OneComponent show_text="嘿嘿嘿"/>
        </View>
    }
}

class OneComponent extends Component{
    show_text: string;
    render(){
        return <Text >显示信息：{this.props.show_text}</Text>
    }
}
