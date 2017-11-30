/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import PropsStudy from './js/props/index';
import StateStudy from './js/state/index'
import ViewSize from './js/view_size/index'
import TextInputStudy from './js/text_input/index'
import ListViewStudy from './js/listview/index'
import FetchStudy from './js/fetch/index'
import Navigation from './js/navigation/index'


export default class App extends Component<> {
    render() {
        // return <PropsStudy />
        // return <StateStudy />
        // return <ViewSize />
        // return <TextInputStudy />
        return <ListViewStudy />
        // return <FetchStudy />
        // return <Navigation />
    }

}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
});
