import React, {Component} from 'react'
import {View, Text, AsyncStorage, Modal, TextInput, TouchableOpacity} from 'react-native'
import Storage from 'react-native-storage'
import PersonalLogin from '../account/login'
import { TabNavigator } from 'react-navigation';
import AppNavigation from '../config/routes'



//初始化数据库
var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间(秒)，设为null则永不过期
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用
    enableCache: true,

})




class AppInit extends Component {

    constructor (props) {
        super(props)
        this.state = {
            loginStatus:true
        }
    }


    async componentWillMount () {
        //在这里获取用户的登录状态，根据登录状态来判断返回主界面还是登录界面
    }

    render () {
            return  this.state.loginStatus?
                <AppNavigation/>
                :<PersonalLogin />
    }
}

export default AppInit
