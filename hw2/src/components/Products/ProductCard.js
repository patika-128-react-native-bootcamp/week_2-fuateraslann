import React from 'react'
import { useState , useEffect } from 'react'
import { SafeAreaView,Text ,View} from 'react-native'
import styles from './ProductCard.style'
export default function ProductCard() {
    
    const [productList , setProductList] = useState([{name : "araba" , price : 5},{name : "araba" , price : 5}])
   
   
    return (
        <SafeAreaView >
                {productList.map(product => {return(
                <View  style ={ styles.product}>
                    <Text style = {styles.name}>{product.name}</Text>
                    <Text style = {styles.price}>{product.price + 'TL'}</Text>
                </View>
                )})}
        </SafeAreaView>
    )
}
