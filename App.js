import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View,Button,ToastAndroid,Image,Dimensions } from 'react-native';
import { useState,useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Lightbox from 'react-native-lightbox-v2';



export default function App({ navigator }) { 

  const [height, setHeight] = useState();
  const [image,setImage] = useState(null);
  const [selected,setSelected] = useState(false);


  const sendPhoto = async (result) => {
    console.log(result.base64);
    axios.post('http://',{
      picture: `data:image/jpg;base64,${result.base64}`
    }).then(res => {
      console.log(res);
      ToastAndroid.show('Photo sent',ToastAndroid.SHORT);
    }).catch(err => {
      console.log(err);
      ToastAndroid.show('Error sending photo',ToastAndroid.SHORT);
    }
    )
  }

  const selectPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      console.log(result);
      setImage(result);
      setSelected(true);
      setHeight(result.height >=400 ? 400: result.height);
    }
    console.log(result);
  };

  return (
    <View style={styles.container}>
      {image && 
        <Lightbox navigator={navigator} >
          <Image source={image} style={{marginHorizontal: 4,width: Dimensions.get('window').width,height:height,marginVertical: 30}} />
        </Lightbox>
        
      }
      {!selected && <Button title="Pick an image from camera roll" onPress={selectPhoto} />}
      {selected && <Button title="Send photo" onPress={() => sendPhoto(image)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},

});
