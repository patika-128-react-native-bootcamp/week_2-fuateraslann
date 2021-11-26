import React from 'react';
import {Button,SafeAreaView,View,Text, StyleSheet} from 'react-native';
import { useState } from 'react';

import Inputs from './components/Inputs/Inputs';
import ProductCard from './components/Products/ProductCard';

const App = () => {
   const [productList , setProductList] = useState([{}])
   function handleClick(){
       console.log('a')
   }
   return (<SafeAreaView style = {styles.container}>
       
       <ProductCard />
       
   </SafeAreaView>) 

}

export default App;

const styles = StyleSheet.create({
    container : {flex : 1},
    button : { flex : 1 }

})