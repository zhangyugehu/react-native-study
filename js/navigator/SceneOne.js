import React, {Component} from 'react';
import { Alert, View, Text, TouchableHighlight } from 'react-native';

export default class SceneOne extends Component {
    static defaultProps = {
        title: 'SceneOne'
    }

    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>点我进入下一场景</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>点我返回上一场景</Text>
                </TouchableHighlight>
            </View>
        )
    }
    _nextScene=()=>{
        this.props.navigator.push({
            title:'next scene',
            index:this.props.route.index++
        })
    }
    _backPressed=()=>{
        if(this.props.route.index>0) {
            this.props.navigator.pop();
        }else{
            Alert.alert('不能再退了.')
        }
    }
}