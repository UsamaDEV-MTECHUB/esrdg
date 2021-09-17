import React, {Component,useState,useEffect} from 'react';
import {
  Text,
  useColorScheme,
  View,Button,TextInput
,StyleSheet,modal, Modal,FlatList,ActivityIndicator
} from 'react-native';
import Login from './components/Login'

import {createAppContainer} from "react-navigation";
import {} from "react-navigation";
import Home from './components/Home';
import Product from './components/Product';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// Functionnal 

//const App = ()=> {
//   const data= "Some data"
//     return (
//       <View>
//           <Text style={[styles.colors,styles.fonts] }>Hello world!</Text>
//           <TextInput placeholder={"Enter your Name"} style={[styles.custom_input]}></TextInput>
//       </View>
//     )
  
// }


// cass base 
// class App extends React.Component {
// constructor(){
// super()
// this.state={
//   name:""
// }
// }
//   render() {
//     return (
//             <View>
//                 <Text style={[styles.colors,styles.fonts] }>{this.state.name}</Text>
//                 <TextInput placeholder={"Enter your Name"} style={[styles.custom_input]}
//                 onChangeText={(e)=>{this.setState({name:e})}}
//                 secureTextEntry={true}
//                 ></TextInput>
//                 <Button title="Click me" onPress={()=>{alert(this.state.name)}}></Button>
//             </View>
//       )
//   }
// }

/////////////// flex basic ////////////// 
// const App = () => {
//   return(
//     <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap"}}>
     
//       <View style={{flex:1,height:150,backgroundColor:'red',alignItems:"center"}}>
//         <Text style={{color:'white'}}>Hello</Text>
//         <FontAwesome5 name="" color="white" size={50}></FontAwesome5>
//       </View>
//      </View>
//   )
// }
////////// icon ///////////////
// const App = () => {
//   return(
//     <View style={{flex:1,flexDirection:"row",justifyContent:"flex-start",flexWrap:"wrap"}}>
     
//       <View style={{flex:1,height:150,backgroundColor:'red',alignItems:"center"}}>
//         <Text style={{color:'white'}}>Hello</Text>
//         <FontAwesome5 name="git" color="white" size={50}></FontAwesome5>
//       </View>
//      </View>
//   )
// }
//////////// modal //////////////
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isLoading:true,
      dataSource:null,

    }
  }
  componentDidMount(){

    return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((json) => {
      console.warn(json.movies);
    })
    .catch((error) => {
      console.error(error);
    });
  
  }
  render() {
    return(
      <View style={{flex:1,marginTop:10,flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}}>
       <Text >Simple tefgdfghjkxst</Text>
              <Button title="Hello" onPress={() =>{
                this.setState({show:true})
              }}></Button>
       {/* <Modal transparent={true} visible={this.state.show}>
         <View style={styles.modal}>
           <View style={styles.modalItem}>
           <Text >Modal tesdfzt</Text>
           <Button title="Close Modal" onPress={() =>{
                this.setState({show:false})
              }}></Button>
           </View>
         </View>
        
       </Modal> */}
       </View>
    )
  } 
}
/////////////Use effect ,state hook///////////

// function App () {
//   const x='initial Data'
//   const [count,setCount] =useState(1);
//   const [data, setData] = useState(x)
//   useEffect(()=>{
//     //console.warn('test ues effect',count)
//     if(count==5) {
//       //alert(data);
//       setData("data Updates")
//     }
//     if(count<5) {
//       setData(x)
//     }
//   })
//     return(
//       <View style={{flex:1,marginTop:10,flexDirection:"column",justifyContent:"space-between",}}>
//         <Product data={count}/>
//        <Text style={{fontSize:60}}>{count}</Text>
//        <Text style={{fontSize:60}}>{data}</Text>
//       <Button title="Update State" onPress={() => {setCount(count+1)}}></Button>
//       <Button title="Decrease State"  onPress={() => {setCount(count-1)}}></Button>
//        </View>
//     )
  
// }
// call api flat lsit

// class App extends React.Component  {
//   constructor() {
//     super();
//     this.state={
//       data:[]
//     }
//   }
//   async componentDidMount() {
//     const resp =await fetch('https://facebook.github.io/react-native.dev/movies.json')
    
 
//     let respJson =await resp.json()
//     console.log(respJson) 
//    // this.setState({data:respJson.movies})
//   }
//    async apicall() {
  
//   }
// render() { 
//     return(
//       <View style={{flex:1,marginTop:10,flexDirection:"column",justifyContent:"space-between",}}>
        
//        <Text style={{fontSize:60}}>APi call</Text>
//       <FlatList  data={this.state.data}  renderItem={({item})=><Text>{item.title}</Text>} />
//        </View>
//     )
  
// }
// }

const styles = StyleSheet.create({
  colors:{
    color:'green',
    
    backgroundColor:'yellow',
    
  },
  fonts:{
    fontWeight:'bold',
    fontSize:30,
  },
  custom_input: {
    color:'red',
    height:90,
    borderBottomWidth:2,
    borderTopWidth:2,
    marginBottom:20,
    
  },
  modal:{
flex:1,
backgroundColor:'#000000aa',
  },
  modalItem:{
   padding:100,
   borderRadius:10,
   flex:1,

    margin:50,
    fontSize:30,
    
backgroundColor:'white'
  }
})
export default App;
