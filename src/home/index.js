import React, {Component} from 'react'
import {View, Text, AsyncStorage, Modal, TextInput, TouchableOpacity,Button} from 'react-native'





class HomeScreen extends Component {
    static navigationOptions = {
        title: '主页',
        headerRight: <Button title="Info" />,
    };

    componentWillMount () {
    }

    render () {
        const { navigate } = this.props.navigation;

        return <View>
            <Text>Hello, Chat App!</Text>
            <Button
                onPress={() => navigate('list_item')}
                title="Chat with Lucy"
            />
        </View>;

    }
}

export default HomeScreen
