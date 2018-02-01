import React, {Component} from 'react'
import {View, Text, Platform, StyleSheet, Animated, Easing} from 'react-native'
import styles,{Purple} from '../common/style'
import {StackNavigator, TabNavigator} from 'react-navigation'
import HomeScreen from '../home/index'
import ProfileScreen from '../profile/index'

import ListItem from '../home/list_item'



//import Ionicons from 'react-native-vector-icons/Ionicons';


//const HomeScreen = () => (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Home Screen</Text>
//    </View>
//);

//const ProfileScreen = () => (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Text>Profile Screen</Text>
//    </View>
//);


const MainPage = TabNavigator({

    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: '首页',
            tabBarLabel: '首页',
        },
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            title: '商家',
            tabBarLabel: '商家',
        },
    },
    mine: {
        screen: ProfileScreen,
        navigationOptions: {
            title: '我的',
            tabBarLabel: '我的',
        },
    },
    more: {
        screen: ProfileScreen,
        navigationOptions: {
            title: '更多',
            tabBarLabel: '更多',
        },
    },
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor:Purple
        }
    }

})


const AppNavigation = StackNavigator({
    main_page: {
        screen: MainPage,
    },
    home_screen:{
        screen:HomeScreen
    },
    list_item:{
        screen:ListItem
    }
})


export default AppNavigation