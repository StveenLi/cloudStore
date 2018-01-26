import React, {Component} from 'react'
import {View, Text, Platform, StyleSheet, Animated, Easing} from 'react-native'
import {StackNavigator, TabNavigator} from 'react-navigation'
//import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
    </View>
);


const MainPage = TabNavigator({

    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
        },
    },
})


const AppNavigation = StackNavigator({
    main_page: {
        screen: MainPage,
    }
})


export default AppNavigation