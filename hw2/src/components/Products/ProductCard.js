import React from 'react'
import { useState , useEffect } from 'react'
import { SafeAreaView,Text ,View , ScrollView} from 'react-native'
import styles from './ProductCard.style'
import Inputs from '../Inputs/Inputs';
export default function ProductCard({badge}) {
    
    const [productList , setProductList] = useState([])
    useEffect(() => {
        if(badge == 'Tarih'){   
            setProductList(productList.sort((a,b) => {
                return new Date(b.Date) - new Date(a.Date)
            }))
        }
        if(badge == 'Artan Fiyat'){
           
            setProductList(productList.sort((a,b) => {
                return a.price -  b.price
            }))
        }
        if(badge == 'Azalan Fiyat'){
            setProductList(productList.sort((a,b) => {
                return b.price -  a.price
            })) 
        }
                   
    }
    ,[badge])
    return (
        <SafeAreaView style ={ styles.container}>
                <ScrollView style = {styles.container} >
                    {productList.map(product => {return(
                    <View  style ={ styles.product}>
                        <Text style = {styles.name}>{product.name}</Text>
                        <Text style = {styles.price}>{product.price + 'TL'}</Text>
                    </View>
                    )})}    
                </ScrollView>
                <Inputs styles = {styles.input} sendProduct = {products =>setProductList([products,...productList ])} />
        </SafeAreaView>
    )
}
