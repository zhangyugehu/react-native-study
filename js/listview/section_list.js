import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Text,
    SectionList
} from 'react-native';


export default class SectionListStudy extends Component {
    render() {

        return <View style={{flex: 1}}>
            <SectionList
                sections={[
                    {title: 'D', data: ['Devin']},
                    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                ]}
                keyExtractor={(item, index)=>index}
                ListFooterComponent = {this._renderFooterView}
                ListHeaderComponent = {this._renderHeaderView}
                ItemSeparatorComponent={this._renderItemSeparator}
                renderItem={this._renderListItem}
                renderSectionHeader={this._renderListSectionHeader}
            />
        </View>
    }

    _renderListItem = ({item, index}) => {
        return <Text>{item}</Text>
    }
    _renderListSectionHeader = ({section, index}) => {
        return <Text style={{backgroundColor:'gray'}}>{section.title}</Text>
    }

    _renderItemSeparator = ()=> {
        return <View style={{height:1, backgroundColor:'gray'}}/>
    }
    _renderHeaderView= ()=>{
        return <Text style={{height:25, backgroundColor:'gray'}}>Header</Text>
    }
    _renderFooterView= ()=>{
        return <Text style={{height:25, backgroundColor:'gray'}}>Footer</Text>
    }
}