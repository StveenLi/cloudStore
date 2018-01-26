import React, {Component} from 'react'
import {View, Text, AsyncStorage, Modal, TextInput, TouchableOpacity,Button} from 'react-native'
import Storage from 'react-native-storage'



class PersonalLogin extends Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    componentWillMount () {


    }

    login = () => {
        this.props.loginin()
    }

    render () {
        return <View>

            <View style={{marginTop:100}}>

                <View>
                    <Text>用户名</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={{padding: 0, flex: 1}}
                        placeholder={'Username'}
                    />

                </View>
                <View>
                    <Text>密码</Text>

                    <TextInput
                        underlineColorAndroid="transparent"
                        style={{padding: 0, flex: 1}}
                        placeholder={'Password'}
                    />
                </View>
                <View>
                    <Button title={'登录'} onPress={()=>{this.login()}}>
                    </Button>
                </View>
            </View>

        </View>

    }
}

export default PersonalLogin
