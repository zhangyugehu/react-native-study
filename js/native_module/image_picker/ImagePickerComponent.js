import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Button,
    View,
    Text,
    ToastAndroid,
    DeviceEventEmitter,
    NativeModules
} from 'react-native';

const ImagePickerModule = NativeModules.ImagePickerModule;

export default class ImagePickerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image_path: 'ic_launcher'
        }
    }

    render() {
        return <View>
            <Button
                title="选择图片"
                onPress={this._pickImage}
            />
            <Image
                style={{width:200,height:200}}
                source={{uri: this.state.image_path}}/>
            <Text>{this.state.image_path}</Text>
        </View>
    }

    _pickImage = () => {
        ImagePickerModule.takePhoto()
            .then((msg) => {
                this._toast(msg);
                this.setState({
                    image_path: msg,
                })
            })
            .catch((error) => {
                this._toast(error.message);
            });
    }

    _toast = (text) => {
        ToastAndroid.show(text, ToastAndroid.SHORT);
    }
}