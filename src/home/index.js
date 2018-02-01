import React, {Component} from 'react'
import {View, Text, AsyncStorage, Modal, TextInput, TouchableOpacity,Button,Image,ScrollView} from 'react-native'
import styles,{Purple,GREY} from '../common/style'
import Swiper from 'react-native-swiper'



class HomeScreen extends Component {
    static navigationOptions = {
        title: '主页',
        header:null
    };

    componentWillMount () {
    }

    renderImg(){
        const images=[
            require('../assets/images/f6b64dc4bf7bee56.jpg'),
            require('../assets/images/91ead58b0bb213b6.jpg'),
            require('../assets/images/d67316858f6c71f3.jpg')
        ];
        const imageViews=[];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1,height:200}}
                    source={images[i]}
                />
            );
        }
        return imageViews;
    }

    render () {
        const { navigate } = this.props.navigation;

        return <ScrollView style={{flex:1}}>
                    <View style={styles.home_header}>
                        <View><Text style={{color:'#fff'}}>上海</Text></View>
                        <View style={{flex:1,justifyContent:'center'}}><TextInput style={{marginLeft:20,marginRight:20,marginBottom:-7,backgroundColor:'rgba(240,248,255,0.5)',borderRadius:50,height:30,padding:10,fontSize:12,color:'#fff'}}></TextInput></View>
                        <View><Text style={{color:'#fff'}}>消息</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Swiper height={200}
                                paginationStyle={{bottom:10}}
                                autoplay={true}
                                dot={<View style={{width:8,height:8,backgroundColor:'white',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                                activeDot={<View style={{width:8,height:8,backgroundColor:'orange',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                        >

                            {this.renderImg()}
                        </Swiper>





                        {/*<Button style={{width:100}}
                            onPress={() => navigate('list_item')}
                            title="ActivityIndicator-加载中"
                        />
                        <Button
                            onPress={() => navigate('list_item')}
                            title="checkBox"
                        />*/}
                    </View>

                    <View style={{flexDirection: 'row',backgroundColor:'#fff'}}>

                        <View style={styles.point_model}><View><Text>优惠卷</Text></View></View>
                        <View style={styles.point_model}><Text>领红包</Text></View>
                        <View style={styles.point_model}><Text>抢钢镚</Text></View>
                        <View style={styles.point_model}><Text>领豆豆</Text></View>
                        <View style={styles.point_model}><Text>白条提额</Text></View>



                    </View>

                    <View style={{backgroundColor:'#fff',marginTop:15}}>
                        <View>
                            <View style={{padding:15,borderBottomWidth:1,borderBottomColor:GREY,alignItems:'center'}}><Text>-新手特权-</Text></View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flex:1,padding:15,borderRightWidth:1,borderRightColor:GREY,alignItems:'center'}}><Text>下载</Text></View>
                                <View style={{flex:1}}>
                                    <View style={{padding:15,borderBottomWidth:1,borderBottomColor:GREY,alignItems:'center'}}><Text>领红包</Text></View>
                                    <View style={{padding:15,alignItems:'center'}}><Text>打开免息</Text></View>
                                </View>
                            </View>
                        </View>
                    </View>

            <View style={{backgroundColor:'#fff',marginTop:15}}>
                <View>
                    <View style={{padding:15,borderBottomWidth:1,borderBottomColor:GREY,alignItems:'center'}}><Text>-极速借贷-</Text></View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,padding:15,borderRightWidth:1,borderRightColor:GREY,alignItems:'center'}}><Text>下载</Text></View>
                        <View style={{flex:1}}>
                            <View style={{padding:15,borderBottomWidth:1,borderBottomColor:GREY,alignItems:'center'}}><Text>领红包</Text></View>
                            <View style={{padding:15,alignItems:'center'}}><Text>打开免息</Text></View>
                        </View>
                    </View>
                </View>
            </View>

                </ScrollView>

    }
}

export default HomeScreen
