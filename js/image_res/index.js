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

export default class extends Component {

    render() {
        return <ScrollView>
            <View>
                <Text>静态图片资源</Text>
                <Image
                    style={{height: 200, width: 200}}
                    source={require('../../images/buxiangfangshou.png')}/>
                <Text>混合App的图片资源</Text>
                <Image source={{uri: 'ic_launcher'}} style={{width: 200, height: 200}}/>
                <Text>网络图片</Text>
                <Image source={{uri: 'http://pic.xiami.net/images/album/img9/106166809/17228423121423193165.jpg'}}
                       style={{width: 200, height: 200}}/>
            </View>
        </ScrollView>
    }
}