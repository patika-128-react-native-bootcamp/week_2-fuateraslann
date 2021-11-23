import {StyleSheet , Dimensions} from 'react-native'

export default styles = StyleSheet.create({
    product : {
        justifyContent: 'space-between',
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomWidth: 0.51,
        borderBottomColor : '#9e9e9e'
    },
    name : { 
        paddingLeft: Dimensions.get('window').width * 0.015,
        fontWeight : '200' },
    price : {
        paddingRight: Dimensions.get('window').width * 0.02,   
        fontSize : 20 ,
        fontWeight : 'bold'}
})