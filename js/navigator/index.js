import React, { Component } from 'react';
// import {Navigator} from 'react-native-deprecated-custom-components';

import SceneOne from './SceneOne'
import SceneTwo from './SceneTwo'

export default class NavigatorApp extends Component{


    render(){
        return <Navigator
            initialRoute={{title:'Initial Route', index:0}}
            renderScene={(route, navigator)=>{
                return <SceneOne
                    title={route.title}
                    // Function to call when a new scene should be displayed
                    onForward={ () => {
                        const nextIndex = route.index + 1;
                        navigator.push({
                            title: 'Scene ' + nextIndex,
                            index: nextIndex,
                        });
                    }}

                    // Function to call to go back to the previous scene
                    onBack={() => {
                        if (route.index > 0) {
                            navigator.pop();
                        }
                    }}
                />
            }}
        />
    }

    _renderScene=(route, navigator)=>{
        return <SceneOne
            title={route.title}
            // Function to call when a new scene should be displayed
            onForward={ () => {
                const nextIndex = route.index + 1;
                navigator.push({
                    title: 'Scene ' + nextIndex,
                    index: nextIndex,
                });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
                if (route.index > 0) {
                    navigator.pop();
                }
            }}
        />
    }
}