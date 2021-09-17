import React from 'react'
import {
    Text,
    View,Button,
} from 'react-native';

const Home = (props) => {   
    //console.warn(props)
    return(
        <View>
            <Text style={{fontSize:50}}>
            {props.data}
            </Text>
            <Button title="this is tile" onPress={() =>{alert('hello')}}/>
        </View>
    )
}

export default Home;