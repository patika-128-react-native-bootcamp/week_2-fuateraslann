import React from 'react'
import { TouchableOpacity, SafeAreaView  , Text} from 'react-native'
import styles from './AddButton.style'
export default function AddButton({onPress}) {
    return (
        <SafeAreaView >
            <TouchableOpacity onPress={onPress} style = {styles.container} >
                <Text style = {styles.addButton}>Add</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
}

