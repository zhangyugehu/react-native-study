import React, {
    Component,
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Platform,
    Text,
    View,
    Alert,
    Button,
    Image,
    TouchableOpacity,
    ToastAndroid,
    Linking,
} from 'react-native';
//
// import {
//     isFirstTime,
//     isRolledBack,
//     packageVersion,
//     currentVersion,
//     checkUpdate,
//     downloadUpdate,
//     switchVersion,
//     switchVersionLater,
//     markSuccess,
// } from 'react-native-update';
import codePush from "react-native-code-push";

const CODE_PUSH_PRODUCTION_KEY = '"mKlpKFFcvT5B97D0nVfa6b3SvSCI7cd9c46c-fe73-41f0-9611-41a45f7bf387"'
const CODE_PUSH_STAGING_KEY = '"u5TzglrtOCqYWFJdqYYqXWKztmxh7cd9c46c-fe73-41f0-9611-41a45f7bf387"'

export default class CodePushComponent extends Component {

    constructor(props){
        super(props);
        this.checkUpdate_hot = this.checkUpdate_hot.bind(this)
        this.state={
            received:0,
            total:0,
            showProgress:false,
            syncStatus:0,
            stateInfo:''
        }
    }

    componentDidMount(){
        // codePush.sync({
        //     updateDialog: {
        //         appendReleaseDescription: true,
        //         descriptionPrefix:'\n\n更新内容：\n',
        //         title:'更新',
        //         mandatoryUpdateMessage:'',
        //         mandatoryContinueButtonLabel:'更新',
        //     },
        //     mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
        //     deploymentKey: CODE_PUSH_STAGING_KEY,
        // });
    }
    codePush_sync=()=>{
        codePush.sync({//默认的热跟新
            updateDialog: true,
            // installMode: codePush.InstallMode.ON_NEXT_RESTART,
            installMode: codePush.InstallMode.IMMEDIATE,
        })
        //     .then((resp)=>{
        //     Alert.alert(resp);
        // }).catch((error)=>{
        //     Alert.alert(error.message);
        // })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Code Push
                </Text>
                <Image
                    style={{width:100, height:100, alignItems:'center'}}
                    source={require('../../images/baoman.gif')}/>
                <Text style={styles.instructions}>
                    {this.state.stateInfo}
                </Text>
                <Text style={styles.instructions}>
                    {this._showProgress()}
                </Text>
                <Button
                    onPress={this.checkUpdate_hot}
                    style={styles.instructions}
                    title="点击这里检查更新"/>
            </View>
        );
    }
    _showProgress = ()=>{
        return this.state.showProgress && ('更新进度' + this.state.received + '/' + this.state.total)
    }
    async checkUpdate_hot (showNotice) {
        await codePush.notifyAppReady();
        codePush.allowRestart();
        this.remotePackage = await codePush.checkForUpdate();
        if (!this.remotePackage) {
            Alert.alert('tips', '已经是最新版本了!');
        } else {
            // Alert.alert('tips',`${this.remotePackage.appVersion} -- ${this.remotePackage.description}`);
            /**
             * function sync(options?: SyncOptions,
             * syncStatusChangedCallback?: SyncStatusChangedCallback,
             * downloadProgressCallback?: DowloadProgressCallback,
             * handleBinaryVersionMismatchCallback?: HandleBinaryVersionMismatchCallback): Promise<SyncStatus>;
             * @param options
             * @param syncStatusChangedCallback
             * @param downloadProgressCallback
             * @param handleBinaryVersionMismatchCallback
             */

            codePush.sync({
                    updateDialog:false,
                        // {
                        //     appendReleaseDescription:true,       // 是否发送通知消息显示给用户，默认为false
                        //     descriptionPrefix:'描述:',    // 描述的前缀，默认为“Description:”
                        //     mandatoryContinueButtonLabel:'继续',  // 强制更新下的继续按钮的文本，默认为“Continue”
                        //     mandatoryUpdateMessage:'更新新版本',     // 强制更新的通知消息文本，默认为“An update is available that must be installed.”
                        //     optionalIgnoreButtonLabel:'忽略',     // 忽略按钮的文本，默认为“Ignore”
                        //     optionalUpdateMessage:'通知消息文本',     // 通知消息文本，默认为“An update is available. Would you like to install it?”
                        //     title:'有新版本',                             // 对话框的标题，默认为“Update available”
                        //     optionalUpdateMessage:'通知消息文本'      // 通知消息文本
                        // },
                    installMode: codePush.InstallMode.IMMEDIATE,
                },
                (state)=>{
                    // switch (state) {
                    //     case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                    //         // Show "downloading" modal
                    //         this.setState({
                    //             showProgress:true
                    //         })
                    //         break;
                    //     case CodePush.SyncStatus.INSTALLING_UPDATE:
                    //         // Hide "downloading" modal
                    //         this.setState({
                    //             showProgress:false
                    //         })
                    //         break;
                    // }
                    let infoMsg = this.state.stateInfo;
                    let showD = false;
                    switch (state){
                        case 1:
                            // 安装
                            infoMsg = '应用新版本中...'
                            break;
                        case 2:
                            // 有新版本
                            infoMsg = '有新版本可更新'
                            break;
                        case 6:
                            // 弹窗
                            infoMsg = '等待用户确认'
                            break;
                        case 7:
                            // 下载
                            infoMsg = '下载中...'
                            showD = true;
                            break;
                        default:
                            infoMsg = ''
                            break;
                    }
                    this.setState({
                        syncStatus:state,
                        stateInfo:infoMsg,
                        showProgress:showD
                    })
                },
                (downloadProgressCallback)=>{
                    this.setState({
                        received:downloadProgressCallback.receivedBytes,
                        total:downloadProgressCallback.totalBytes,
                    });
                    // ToastAndroid.show(`${info.receivedBytes}/${info.totalBytes}`, ToastAndroid.SHORT);
                }
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
