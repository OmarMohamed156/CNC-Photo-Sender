import { View ,Text,StyleSheet,SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Shapes(){
    return(
        <View style={styles.container} >
            <Text >Shapes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
    }
})