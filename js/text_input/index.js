import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView
} from 'react-native';

export default class TextInputStudy extends Component {

    render() {
        return <ScrollView>
            <View>
                <View style={styles.marginTopStyle}>
                    <Text>onChangeText/onSubmitEditing/onBlur</Text>
                    <TextInput
                        style={{
                            height: 50,
                            borderColor: '#00f',
                            borderWidth: 2,
                            borderBottomColor: '#0f0',
                        }}
                        defaultValue="默认文本"
                        placeholder="输入内容"
                        placeholderTextColor='gray'
                        editable={true}
                        onFocus={this._onFocusListener}
                        onBlur={this._onOutFocusListener}
                        onChangeText={this._onTextChanged}
                        onSubmitEditing={this._onSubmitEdit}
                    />
                </View>
                <View style={styles.marginTopStyle}>
                    <Text>控制TextInput是否要自动将特定字符切换为大写</Text>
                    <TextInput
                        placeholder="underlineColorAndroid"
                        underlineColorAndroid="transparent"/>
                </View>
                <View style={styles.marginTopStyle}>
                    <Text>控制TextInput是否要自动将特定字符切换为大写</Text>
                    <TextInput
                        placeholder="autoCapitalize"
                        autoCapitalize={'words'}/>
                </View>
                <View style={styles.marginTopStyle}>
                    <Text>在componentDidMount后会获得焦点。默认值为false。</Text>
                    <TextInput
                        placeholder="autoFocus "
                        autoFocus={true}/>
                </View>
                <View style={styles.marginTopStyle}>
                    <Text>如果为true，则隐藏光标。</Text>
                    <TextInput
                        caretHidden={true}
                        placeholder="caretHidden"/>
                </View>
                <View style={styles.marginTopStyle}>
                    <Text>软键盘类型</Text>
                    <TextInput
                        keyboardType={'numeric'}
                        placeholder="keyboardType"/>
                </View>
                <View style={styles.marginTopStyle}>
                    <Text>限制文本框中最多的字符数10</Text>
                    <TextInput
                        maxLength={10}
                        placeholder="maxLength"/>
                </View>
                <View style={styles.marginTopStyle}>
                    <Text>如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholder="secureTextEntry"/>
                </View>

            </View>
        </ScrollView>
    }

    _onTextChanged = (text) => {
        Alert.alert("_onTextChanged " + text);
    }
    _onSubmitEdit = () => {
        Alert.alert("_onSubmitEdit");
    }
    _onOutFocusListener = () => {
        Alert.alert("out of focus");
    }
    _onFocusListener = () =>{
        Alert.alert("on focused");
    }
}

const styles = StyleSheet.create({
    marginTopStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
    },
})