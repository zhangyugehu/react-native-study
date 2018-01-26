/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    AppState,
    Navigator,
    View,
    Text,
    Modal
} from 'react-native';

import codePush from "react-native-code-push";
import PropsStudy from './js/props/index';
import StateStudy from './js/state/index'
import ViewSize from './js/view_size/index'
import TextInputStudy from './js/text_input/index'
import ListViewStudy from './js/listview/index'
import FetchStudy from './js/fetch/index'
import Navigation from './js/react-navigation/index'
import ImageSourceStudy from './js/image_res/index'
import AnimatedStudy from './js/anim/index'
import NavigatorApp from './js/navigator/index'
import PlatformView from './js/platform/index'
import EventEmitterApp from './js/event_emitter/index'
import NativeModuleApp from './js/native_module/LocationFactory'
import ImagePickerComponent from './js/native_module/image_picker/ImagePickerComponent'
import CodePushComponent from './js/hot_push/CodePushComponent'
import ViewPagerDemo from './js/viewpager_android/index'


export default class App extends Component<> {
    constructor(props){
        super(props);
        this.state={
            modalVisible : false,
            stateInfo:'',
            received:0,
            total:0
        }
    }

    componentDidMount(){
        // AppState.addEventListener("change", (newState) => {
        //     newState === "active" && codePush.sync({
        //             updateDialog:false,
        //             installMode: codePush.InstallMode.IMMEDIATE,
        //         },
        //         (state)=>{
        //             let infoMsg = this.state.stateInfo;
        //             let showD = false;
        //             switch (state){
        //                 case 1:
        //                     // 安装
        //                     infoMsg = '应用新版本中...'
        //                     showD = true;
        //                     break;
        //                 case 2:
        //                     // 有新版本
        //                     infoMsg = '有新版本可更新'
        //                     break;
        //                 case 6:
        //                     // 弹窗
        //                     infoMsg = '等待用户确认'
        //                     break;
        //                 case 7:
        //                     // 下载
        //                     infoMsg = '下载新版本...'
        //                     showD = true;
        //                     break;
        //                 default:
        //                     infoMsg = ''
        //                     break;
        //             }
        //             this.setState({
        //                 stateInfo:infoMsg,
        //                 modalVisible:showD
        //             })
        //         },
        //         (downloadProgressCallback)=>{
        //             this.setState({
        //                 received:downloadProgressCallback.receivedBytes,
        //                 total:downloadProgressCallback.totalBytes,
        //             });
        //         }
        //     )
        // });
    }
    render() {
        return <View style={{flex:1}}>
            {/*{this._renderUpdateView()}*/}
            {this._renderOnView()}
        </View>
    }
    _renderUpdateView=()=>{
        return this.state.modalVisible && <Text style={styles.updateTextStyle}>{this.state.stateInfo} ({this.state.received}/{this.state.total})</Text>
    }
    _renderOnView=()=>{
        // return <PropsStudy />
        // return <StateStudy />
        // return <ViewSize />
        // return <TextInputStudy />
        // return <ListViewStudy />
        // return <FetchStudy />
        // return <Navigation />
        // return <ImageSourceStudy />
        // return <AnimatedStudy />
        // return <NavigatorApp />
        // return <PlatformView />
        // return <EventEmitterApp />
        // return <NativeModuleApp />
        // return <ImagePickerComponent />
        // return <CodePushComponent />
        return <ViewPagerDemo style={{flex:1}} />
    }
    _setModalVisible=(visibility)=>{
        this.setState({
            modalVisible:visibility
        })
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    updateTextStyle:{
        fontSize:18,
    },
});
