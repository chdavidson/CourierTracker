import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [torch, setTorch] = useState(Camera.Constants.FlashMode.off);
  const [photo, setPhoto] = useState(null);
    const cameraRef = React.createRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  const toggleTorch = () => {
    if(torch == Camera.Constants.FlashMode.off){
      setTorch(Camera.Constants.FlashMode.torch)
    }
    else setTorch(Camera.Constants.FlashMode.off)
  }

  snap = async () => {
    if(this.camera){
      let photo = await this.camera.takePictureAsync();
      console.log(photo);

    }
  }
  
  
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} 
              type={type}
              flashMode={torch}
              ref={ref => { this.camera = ref}}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Button title={"Take a photo"} onPress={snap}/>
      <Button title={"Toggle Torch"} onPress={toggleTorch}/>
    </View>
  );
}


export default CameraComponent;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});