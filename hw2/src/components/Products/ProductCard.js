import React from 'react'
import { useState , useEffect } from 'react'
import { SafeAreaView,Text ,View} from 'react-native'
import styles from './ProductCard.style'
import Inputs from '../Inputs/Inputs';
export default function ProductCard() {
    
    const [productList , setProductList] = useState([])
   
    return (
        <SafeAreaView style ={ styles.container}>
                <View style = {styles.container} >
                    {productList.map(product => {return(
                    <View  style ={ styles.product}>
                        <Text style = {styles.name}>{product.name}</Text>
                        <Text style = {styles.price}>{product.price + 'TL'}</Text>
                    </View>
                    )})}    
                </View>
                <Inputs styles = {styles.input} sendProduct = {products =>setProductList([...productList , products])} />
        </SafeAreaView>
    )
}
