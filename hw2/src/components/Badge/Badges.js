import React from 'react'
import styles from './Badges.style'
import { TouchableOpacity, SafeAreaView  , Text , Button} from 'react-native'
import { useState } from 'react'

export default function Badges({changeBadge}) {
    const [selectedBadge , setSelectedBadge] = useState("Tarih")

    function handleClick(newBadge){
        setSelectedBadge(newBadge)
        changeBadge(newBadge)
    }

    return (
        <SafeAreaView style = {styles.container} >
            <TouchableOpacity style =  { selectedBadge=='Artan Fiyat' ? styles.selectedBadge : styles.badges} onPress = {() => {handleClick('Artan Fiyat')}} >
                <Text style =  {styles.text} title = "Artan Fiyat">Artan Fiyat</Text>
            </TouchableOpacity>
            <TouchableOpacity  style =  { selectedBadge=='Azalan Fiyat' ? styles.selectedBadge : styles.badges} onPress = {() => {handleClick('Azalan Fiyat')}}>
                <Text style =  {styles.text} title = "Azalan Fiyat">Azalan Fiyat</Text>
            </TouchableOpacity>
            <TouchableOpacity style =  { selectedBadge=='Tarih' ? styles.selectedBadge : styles.badges} onPress = {() => {handleClick('Tarih')}}>
                <Text style =  {  styles.text } title = "Tarih">Tarih</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
