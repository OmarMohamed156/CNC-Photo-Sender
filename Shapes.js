import { View ,Text,StyleSheet,SafeAreaView,TouchableOpacity,ToastAndroid } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import axios from "axios";
import { useState } from "react";

export default function Shapes(){

    const sendShape= (shape)=>{
        axios.post('http://',{
            shape:shape
        }).then(res=>{
            console.log(res);
            ToastAndroid.show('Shape sent',ToastAndroid.SHORT);
        }).catch(err=>{
            console.log(err);
            ToastAndroid.show('Error Sending the Shape',ToastAndroid.SHORT);
        })
    }


    return(
        <View style={styles.container} >
            <Text style={styles.title} >Select the Shape ypu want to be drawn</Text>
            <View style={styles.btnContainer} >
                <TouchableOpacity style={styles.opacityBtn}>
                    <Ionicons name="ios-square" size={80} color="#eb4034" onPress={()=>sendShape('square')} />
                    <Text style={{marginTop:30,marginHorizontal:5,fontSize:15,}}>Square</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.opacityBtn}>
                    <Ionicons name="ellipse-outline" size={80} color="#eb4034"  onPress={()=>sendShape('circle')}/>
                    <Text style={{marginTop:30,marginHorizontal:5,fontSize:15,}}>Circle</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
    },
    title:{
        fontSize:15,
        marginTop:50,
        fontWeight:'bold'
    },
    btnContainer:{
        flex:1,
        alignItems:'center',
        width:'100%',
        marginTop:20,
    },
    opacityBtn:{
        flexDirection:'row',
        marginVertical:10}
})