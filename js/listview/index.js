import React, {Component} from 'react';
import {
} from 'react-native';

import FlatListStudy from './flat_list';
import SectionListStudy from './section_list';

export default class extends Component{
    render(){
        // return <FlatListStudy />
        return <SectionListStudy />
    }
}