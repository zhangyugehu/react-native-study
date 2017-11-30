import React, { Component } from 'react';
import {
    View,
    Text,
} from "react-native";
let index = 0;
export default class extends Component{
    constructor(props){
        super(props);
        this.state={
            show:true,
        }

        setInterval(()=>{
            if(this.state.show) index ++;
            this.setState({
                show:!this.state.show,
            });
        },500);
    }
    render(){
        return <View>
            <Text>{this.state.show?this.props.text + index:''}</Text>
        </View>
    }
}