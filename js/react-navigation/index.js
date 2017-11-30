import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

const FirstScreen = ({navigation}) => (
    <View >
        <Text>Home Screen</Text>
        <Button
            onPress={() => navigation.navigate('Second')}
            title="Go to Second"
        />
    </View>
);

const SecondScreen = ({navigation}) => (
    <View>
        <Text>Home Screen</Text>
        <Button
            onPress={() => navigation.navigate('First')}
            title="Go to First"
        />
    </View>
);

const RootNavigator = StackNavigator({
    First: {
        screen: FirstScreen,
        navigationOptions: {
            title:'FirstScreen',
        },
    },
    Second: {
        screen: SecondScreen,
        navigationOptions: {
            title:'SecondScreen',
            // 右滑返回
            gesturesEnabled:true,
        }
    },
});

export default class extends Component {
    render() {
        return <RootNavigator/>
    }
}