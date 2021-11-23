import React from 'react'
import { SafeAreaView, TextInput ,Text, Button} from 'react-native'
import { useState } from 'react'
import styles from './Inputs.style'
import AddButton from '../Buttons/AddButton'
export default function Inputs(sendProduct) {
    const [name , setName] = useState('')
    const [price , setPrice ] = useState(0)
    const handleSendProduct = () => {
        const product = {name : name , price : price , Date : Date.now()} 
        
    }
    
    return (
        <SafeAreaView >
            <Text style  = {styles.header} >
                Name:
            </Text>
            <TextInput style = {styles.inputs} onChange={setName}/>
            <Text style  = {styles.header} >
                Price:
            </Text>
            <TextInput style = {styles.inputs} onChange = {setPrice}/>
            <AddButton onPress = {handleSendProduct} />
        </SafeAreaView>
    )
}