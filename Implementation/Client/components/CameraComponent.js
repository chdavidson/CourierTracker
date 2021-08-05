import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image} from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [torch, setTorch] = useState(Camera.Constants.FlashMode.off);
  const [capture, setCapture] = useState(null);

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
      this.camera.takePictureAsync({onPictureSaved: processPicture});
    }
  }

  const processPicture = photo => {
    console.log(photo)
    setCapture(photo);
    // setVisability(true);
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
      {capture ? <Image
                    style={styles.capturedImage}
                    source={{
                        uri: capture.uri,
                    }}
                /> : null}
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
  capturedImage:{
    height: 100,
    width: 100
  }
});