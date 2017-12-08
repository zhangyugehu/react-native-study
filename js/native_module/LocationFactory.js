import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    View,
    Text,
    ToastAndroid,
    DeviceEventEmitter,
    NativeModules
} from 'react-native';
const EVENT_LOCATION = 'event_location';
const LocationModule = NativeModules.LocationModule;
export default class LocationFactory extends Component{

    constructor(props){
        super(props);
        this.state={
            location_info:''
        }
    }

    startLocation=()=>{
        LocationModule.startLocation(()=>{
            ToastAndroid.show('sdfsfs', ToastAndroid.SHORT);
        });
        this.subscripLocation = DeviceEventEmitter.addListener(EVENT_LOCATION, (e)=>{
            this.setState({
                location_info:e.text
            });
        });
    }

    componentDidMount(){
        this.startLocation()
    }

    componentWillUnmount(){
        this.subscripLocation.remove();
    }

    render(){
        return <View>
            <Text>{this.state.location_info}</Text>
        </View>
    }
}

