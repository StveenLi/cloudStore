import React, {Component} from 'react'
import {View, Text, AsyncStorage, Modal, TextInput, TouchableOpacity,Button} from 'react-native'





class ListItem extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    componentWillMount () {
    }

    render () {
        const { navigate } = this.props.navigation;

        return <View>
            <Text>ListItem Page</Text>
        </View>

    }
}

export default ListItem
