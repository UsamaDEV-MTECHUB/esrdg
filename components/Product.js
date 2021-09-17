import React, {Component,useState,useEffect} from 'react'
import {
    Text,
    View,Button,
} from 'react-native';

const Product = (props) => {   
    //console.warn(props)
    useEffect( ()=>{
        console.warn('getting data', props)
    })
    return(
        <View>
            <Text style={{fontSize:50}}>
          Product Page
            </Text>
           
        </View>
    )
}

export default Product;