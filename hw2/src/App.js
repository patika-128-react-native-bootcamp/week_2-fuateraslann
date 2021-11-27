import React from 'react';
import {Button,SafeAreaView,View,Text, StyleSheet, ScrollView} from 'react-native';
import { useState } from 'react';

import Inputs from './components/Inputs/Inputs';
import ProductCard from './components/Products/ProductCard';
import Badges from './components/Badge/Badges';

const App = () => {
   const [badge , setBadge] = useState("")

   return (<SafeAreaView style = {styles.container}>
       <Badges changeBadge = {setBadge}/>
       <ProductCard badge = {badge}/>
   </SafeAreaView>) 

}

export default App;

const styles = StyleSheet.create({
    container : {flex : 1},
    Badges : { flex : 1  , 
        
    }

})