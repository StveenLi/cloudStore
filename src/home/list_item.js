import React, {Component} from 'react'
import {View, Text, StyleSheet, Modal, TextInput, TouchableOpacity,Button,ActivityIndicator} from 'react-native'





class ListItem extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    state = {
        animating: true,
    }

    componentWillMount () {
    }



    render () {
        const { navigate } = this.props.navigation;

        return <View>
                        <ActivityIndicator
                            animating={this.state.animating}
                            style={[styles.centering, {height: 80}]}
                            size="large"
                        />
                </View>

    }
}
const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});

export default ListItem
