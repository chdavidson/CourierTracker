
// import { firebaseConfig } from './firebase';
import { firebaseConfig } from '../navigation/AppNavigator';
import * as Firebase from 'firebase'
import {useEffect} from 'react'


class PhotoUploader {


    checkFBConfigured(){
        if(!Firebase.apps.length){
            Firebase.initializeApp(firebaseConfig)
        }
    }


    uploadPhoto = async (fileURI, filename) => {

        this.checkFBConfigured();


        const blob = await new Promise((resolve, reject)=> {
            const xhr = new XMLHttpRequest();
            xhr.onload = function(){
              resolve(xhr.response)
            };
            xhr.onerror = function (){
              reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', fileURI, true);
            xhr.send(null);
         });


        const ref = Firebase.storage().ref().child(filename);
        const snapshot = ref.put(blob);

        let result =
        snapshot.on(    Firebase.storage.TaskEvent.STATE_CHANGED,
                                    () => {
                                        //setUploading(true);
                                    },
                                    err =>  { 
                                            //setUploading(false);
                                            console.log(err)
                                            blob.close();
                                            return err;
                                            },
                                    () => { 
                                            //setUploading(false);
                                            snapshot.snapshot.ref.getDownloadURL()
                                            .then(url => {  console.log("download url: "+url); })
                                            blob.close();
                                            return url;
                                        }
                                )

        
        
    }
}

export default PhotoUploader