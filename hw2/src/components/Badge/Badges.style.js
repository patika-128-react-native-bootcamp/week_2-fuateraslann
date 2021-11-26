import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container : {
        justifyContent: 'space-between',
        flexDirection : 'row',
        alignItems : 'center',
        marginLeft : 40,
        marginRight : 50
    },
    
    badges : { 
        borderWidth: 1,
        borderRadius:5, 
        backgroundColor: '#bdbdbd',
        padding:5,   
    },
    selectedBadge : {
        borderWidth: 1,
        borderRadius:5, 
        backgroundColor: '#616161',
        padding:5, 
    },
    text : {
        fontSize : 15
    }
})