import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    View,
    ToastAndroid,
    DeviceEventEmitter
} from 'react-native';

export default class extends Component{

    componentDidMount(){
        this.subscription=DeviceEventEmitter.addListener('i_changed', ()=>{
            ToastAndroid.show('changed', ToastAndroid.SHORT);
        })

    }

    componentWillUnmount(){
        this.subscription.remove();
    }

    render(){
        return <Button
            title='搞事情'
            onPress={this._emitEvent}/>
    }

    _emitEvent=()=>{
        DeviceEventEmitter.emit('i_changed')
    }
}