import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SceneTwo extends Component {
    static defaultProps = {
        title: 'SceneTwo'
    };

    render() {
        return (
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
            </View>
        )
    }
}