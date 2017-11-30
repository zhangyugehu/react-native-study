import React, {Component} from 'react';
import {
    Animated,
    StyleSheet,
    Image
} from 'react-native';

export default class FadeInView extends Component {

    constructor(props){
        super(props);
        this.state={
            fadeAnim:new Animated.Value(0)
        }
    }

    componentDidMount(){

        console.log('hahaha');
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue:1,
                duration:3000
            }
        ).start();

    }

    render(){
        return <Animated.View
            style={{
                ...this.props.style,
                opacity:this.state.fadeAnim,
            }}>
            {this.props.children}
        </Animated.View>
    }

}