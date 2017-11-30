import React, { Component } from 'react';
import {
} from "react-native";

import ImageProps from './image_props'
import CustomConpentProps from './custom_component_props'

export default class extends Component{
    render(){
        // return <ImageProps />
        return <CustomConpentProps />
    }
}