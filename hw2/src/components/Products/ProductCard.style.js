import {StyleSheet , Dimensions} from 'react-native'

export default styles = StyleSheet.create({
    container : { 
        flex:1
    },
    product : {
        justifyContent: 'space-between',
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth: 0.51,
        borderBottomColor : '#9e9e9e'
    },
    input : { 
        flex:1 },
    name : { 
        paddingLeft: Dimensions.get('window').width * 0.015,
        fontWeight : '200' },
    price : {
        paddingRight: Dimensions.get('window').width * 0.02,   
        fontSize : 20 ,
        fontWeight : 'bold'}
})