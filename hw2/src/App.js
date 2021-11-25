import React from 'react';
import {SafeAreaView,View,Text, StyleSheet} from 'react-native';
import { useState } from 'react';

import Inputs from './components/Inputs/Inputs';
import ProductCard from './components/Products/ProductCard';

const App = () => {
   const [productList , setProductList] = useState([{}])
   return (<SafeAreaView>
       <View>
           <Text>Hello </Text>
           

          
       </View>
       <ProductCard />
       <Inputs sendProduct = {products =>setProductList(products)} />
   </SafeAreaView>) 

}

export default App;

const styles = StyleSheet.create({
    container : {flex : 1},
    button : { flex : 1 }

})