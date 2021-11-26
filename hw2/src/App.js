import React from 'react';
import {Button,SafeAreaView,View,Text, StyleSheet} from 'react-native';
import { useState } from 'react';

import Inputs from './components/Inputs/Inputs';
import ProductCard from './components/Products/ProductCard';
import Badges from './components/Badge/Badges';

const App = () => {
   const [productList , setProductList] = useState([{}])
   function handleBadgeChange(badge){
       console.log(badge)
   }
   return (<SafeAreaView style = {styles.container}>
       <Badges changeBadge = {badge => handleBadgeChange(badge)}/>
       <ProductCard />
       
   </SafeAreaView>) 

}

export default App;

const styles = StyleSheet.create({
    container : {flex : 1},
    Badges : { flex : 1  , 
        
    }

})