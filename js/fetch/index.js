import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Text,
    SectionList
} from 'react-native';


export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info_json: {},
            isSuccess: false,
            error: ''
        }
    }

    componentDidMount() {
        fetch("https://facebook.github.io/react-native/movies.json")
            .then(response => response.json())
            .then(responseJson => this.setState({isSuccess: true, info_json: responseJson}))
            .catch(error => {
                this.setState({error: error, isSuccess: false})
            })
    }

    render() {
        return <View>
            <Text>Fetch：Movies</Text>
            {this.state.isSuccess ? this._renderSuccess() : <Text>{this.state.error}</Text>}
        </View>
    }

    _renderSuccess = () => {
        let movies = this.state.info_json.movies;
        return <View>
            {movies.map((item, index) => {
                return <View
                    key={'item-' + index}
                    style={{borderBottomWidth: 1, borderColor: 'green'}}>
                    <Text style={{backgroundColor: 'gray'}}>title: {item.title}</Text>
                    <Text>releaseYear: {item.releaseYear}</Text>
                </View>
            })}
        </View>
    }
}