import {StyleSheet} from 'react-native'

export const Purple = "#762b88"
export const GREY = '#f9f9f9'
const styles = StyleSheet.create({

    home_header:{
        height:65,
        backgroundColor:Purple,
        flexDirection:'row',
        alignItems:'flex-end',
        padding:15
    },
    point_model:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ff2c55',
        borderRadius:30,
        width:70,
        height:70,
        margin:5
    }

})

export default styles