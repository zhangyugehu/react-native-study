import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    FlatList,ToastAndroid
} from 'react-native';


export default class FlatListStudy extends Component {

    constructor(props){
        super(props);
        this.state={
            isRefreshing:false
        }
    }
    render() {
        let data = [];
        for(var i = 0; i < 100; i++){
            data.push({name: 'name-' + i, age: i});
        }
        return <View style={{flex: 1}}>
            <FlatList
                keyExtractor={(item, index) => index}
                data={data}
                renderItem={this._renderListItem}
                ItemSeparatorComponent={this._renderItemSeparator}
                ListFooterComponent = {this._renderFooterView}
                ListHeaderComponent = {this._renderHeaderView}
                horizontal={false}
                numColumns={1}
                refreshing={this.state.isRefreshing}
                onRefresh={this._onRefreshListener}
                onEndReachedThreshold={2}
                onEndReached={this._onEndReached}
            />
        </View>
    }

    // {item} => {item: item}
    _renderListItem = ({item}, index) => {
        return <TouchableHighlight
            style={{height:50, justifyContent:'center'}}
            onPress={()=>this._itemClick(item)}
            activeOpacity={0.1}>
            <View >
                <Text>name: {item.name} </Text>
                <Text>age: {item.age} </Text>
            </View>
        </TouchableHighlight>
    }

    _itemClick = (item)=>{
        Alert.alert('提示', item.name);
    }

    /**
     *
     * @returns {*}
     * @private
     */
    _renderItemSeparator = ()=> {
        return <View style={{height:1, backgroundColor:'gray'}}/>
    }
    _renderHeaderView= ()=>{
        return <Text style={{height:25, backgroundColor:'gray'}}>Header</Text>
    }
    _renderFooterView= ()=>{
        return <Text style={{height:25, backgroundColor:'gray'}}>Footer</Text>
    }
    _onRefreshListener = ()=>{
        this.setState({
            isRefreshing:true
        });
        ToastAndroid.show('刷新>.<', ToastAndroid.SHORT);
        setTimeout(()=>
            this.setState({
                isRefreshing:false
            }), 2000)
    }
    _onEndReached=()=>{
        ToastAndroid.show('到底啦>.<', ToastAndroid.SHORT);
    }
}