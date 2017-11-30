import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class ViewSize extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <View  style={{flex:1, flexDirection:'column', justifyContent:'flex-start'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:100, height:100, backgroundColor:'#f00'}} >
                    <Text>width:100</Text>
                </View>
                <View style={{width:50, height:100, backgroundColor:'#0f0'}} >
                    <Text>width:50</Text>
                </View>
                <View style={{width:100, height:100, backgroundColor:'#00f'}} >
                    <Text>width:100</Text>
                </View>
            </View>
            <View style={{height:10}}/>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1, height:100, backgroundColor:'#f00'}} >
                    <Text>flex:1</Text>
                </View>
                <View style={{flex:2, height:100, backgroundColor:'#0f0'}} >
                    <Text>flex:2</Text>
                </View>
                <View style={{flex:3, height:100, backgroundColor:'#00f'}} >
                    <Text>flex:3</Text>
                </View>
                <View style={{flex:4, height:100, backgroundColor:'#0ff'}} >
                    <Text>flex:4</Text>
                </View>
            </View>
        </View>
    }
}
