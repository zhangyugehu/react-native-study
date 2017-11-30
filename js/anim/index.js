import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    ScrollView,
    FlatList, ToastAndroid, Image
} from 'react-native';

import FadeInView from './FadeInView'

export default class extends Component {

    render(){
        return <FadeInView>
            <Image
                style={{width:200, height:200}}
                source={require('../../images/buxiangfangshou.png')}/>
        </FadeInView>
    }
}