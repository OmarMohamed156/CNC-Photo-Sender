import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View,Button,ToastAndroid,Image } from 'react-native';
import { useState,useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {

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
    }
    console.log(result);
  };

  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.image} />}
      {!selected && <Button title="Pick an image from camera roll" onPress={selectPhoto} ></Button>}
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
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },

});
