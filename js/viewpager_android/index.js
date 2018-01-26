import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    ViewPagerAndroid,
    Dimensions,
    TouchableOpacity
} from "react-native";

const PagerType1=[
    {content:'tab 1'},
    {content:'tab 2'},
    {content:'tab 3'},
]
const PagerType2=[
    {content:'tab 1'},
    {content:'tab 2'},
    {content:'tab 3'},
    {content:'tab 4'},
]
const width = Dimensions.get('window').width;

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state={
            pagers:PagerType2,
            pageIndex:0
        }
    }

    render(){
        return <View style={{flex:1, backgroundColor:'black'}} >
            <Button
                style={{flex:1}}
                title={'PagerType1(' + (this.state.pageIndex + 1) + '/' + this.state.pagers.length + ')'}
                onPress={()=>{
                    // let pagers = this.state.pagers;
                    // pagers.push({content:'add ' + new Date().getTime()});
                    this.setState({
                        pagers:PagerType1,
                    })
            }}/>
            <Button
                style={{flex:1}}
                title={'PagerType2(' + (this.state.pageIndex + 1) + '/' + this.state.pagers.length + ')'}
                onPress={()=>{
                    // let pagers = this.state.pagers;
                    // pagers.pop();
                    this.setState({
                        pagers:PagerType2,
                    })
            }}/>
            {
                this.state.pagers.length<4?
                    <WrapView
                        style={{flex:1}}
                        page={this.state.pageIndex}
                        pagers={this.state.pagers}
                        onPageSelected={(e) => {
                            let index = e.nativeEvent.position;
                            this.setState({
                                pageIndex: index
                            })
                    }}/>:
                    <WrapViewPager
                        style={{flex:1}}
                        width = {width}
                        page={this.state.pageIndex}
                        pagers={this.state.pagers}
                        onPageSelected={(e) => {
                            let index = e.nativeEvent.position;
                            this.setState({
                                pageIndex: index
                            })
                    }}/>
            }
        </View>
    }
}

class WrapView extends Component{

    render(){
        return <View style={{flex:1, backgroundColor:'blue'}} >
            <ViewPagerAndroid
                style={{flex: 1, backgroundColor:'gray'}}
                initialPage={this.props.page || 0}//初始页面下标
                onLayout={(event)=>{
                    console.warn(JSON.stringify(event.nativeEvent.layout))
                }}

                scrollEventThrottle={5}
                onPageSelected={this.props.onPageSelected} >
                {this.renderPagers()}
            </ViewPagerAndroid>
        </View>
    }

    renderPagers=()=>{
        return this.props.pagers.map((item, index)=>{
            return <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'green'}} key={'index ' + index}>
                <CustomView style={{flex: 1, backgroundColor:'yellow'}} content={item.content}/>
            </View>
        })
    }
}
class WrapView2 extends Component{

    render(){
        return <View style={{flex:1, backgroundColor:'blue'}} >
            <ViewPagerAndroid
                style={{flex: 1, backgroundColor:'gray'}}
                initialPage={this.props.page || 0}//初始页面下标
                onLayout={(event)=>{
                    console.warn(JSON.stringify(event.nativeEvent.layout))
                }}

                scrollEventThrottle={5}
                onPageSelected={this.props.onPageSelected} >
                {this.renderPagers()}
            </ViewPagerAndroid>
        </View>
    }

    renderPagers=()=>{
        return this.props.pagers.map((item, index)=>{
            return <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'green'}} key={'index ' + index}>
                <CustomView style={{flex: 1, backgroundColor:'yellow'}} content={item.content}/>
            </View>
        })
    }
}
class WrapViewPager extends React.Component{

    constructor(props){
        super(props);
        let width = this.props.width / this.props.pagers.length
        this.state={
            width,
            marginLeft: width * this.props.page,
        }
    }


    componentWillReceiveProps(nextProps, nextContext) {
        this.switchToTab(nextProps.page)
    }

    switchToTab=index=>{
        this.setState({
            marginLeft: this.state.width * index,
        })
    }

    render(){
        return <View style={{flex:1, backgroundColor:'blue'}} >
            <View style={{height:50, flexDirection:'row'}}>
                {
                    this.props.pagers.map((item, index)=>{
                        return <TouchableOpacity
                            key={'index_' + index}
                            onPress={()=>{
                                this.viewpager.setPage(index);
                                this.switchToTab(index)
                            }}
                            style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text>{item.content}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
            <View style={{
                height:5,
                backgroundColor:'red',
                width:this.state.width,
                marginLeft:this.state.marginLeft,
            }}
            />
            <ViewPagerAndroid
                style={{flex: 1, backgroundColor:'gray'}}
                initialPage={this.props.page || 0}//初始页面下标
                onLayout={(event)=>{
                    console.warn(JSON.stringify(event.nativeEvent.layout))
                }}
                ref={viewpager=>{this.viewpager=viewpager}}

                scrollEventThrottle={5}
                onPageSelected={this.props.onPageSelected} >
                {this.renderPagers()}
            </ViewPagerAndroid>
        </View>
    }

    renderPagers=()=>{
        return this.props.pagers.map((item, index)=>{
            return <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:'green'}} key={'index ' + index}>
                <CustomView style={{flex: 1, backgroundColor:'yellow'}} content={item.content}/>
            </View>
        })
    }
}

class CustomView extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return <View style={{backgroundColor:'white'}}><Text style={{fontSize:20}}>{this.props.content}</Text></View>
    }
}
