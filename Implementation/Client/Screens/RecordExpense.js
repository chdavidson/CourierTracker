import React, {useState, useContext, useEffect} from 'react'
import { StyleSheet, View, Button, TextInput, Text } from 'react-native'
import { DbContext } from "../provider/DbProvider";
import CameraComponent from '../components/CameraComponent'
import { Dimensions } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import Request from '../helpers/request';

const RecordExpenseScreen = (navigation) => {


    const db = useContext(DbContext);
    const currentUser = db.currentUser;

    let currentDate = new Date();

    const [newExpense, setNewExpense] = useState({
                                                    "amount": 0.0,
                                                    "date": '',
                                                    "image": '',
                                                    "category": '',
                                                    "user": {
                                                        "id": currentUser.id,
                                                        "firstName": currentUser.firstName,
                                                        "secondName": currentUser.secondName,
                                                        "username": currentUser.username,
                                                        "password": currentUser.password,
                                                        "profilePicture": currentUser.profilePicture,
                                                    }  

                                                })


    const handlePhoto = async (photoURI) => {
        const blob = await new Promise((resolve, reject)=> {
            const xhr = new XMLHttpRequest();
            xhr.onload = function(){
              resolve(xhr.response)
            };
            xhr.onerror = function (){
              reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', photoURI, true);
            xhr.send(null);
         });


        const ref = Firebase.storage().ref().child(currentUser.username+'/Expenses/'+newExpense["date"]);
        const snapshot = ref.put(blob);

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
                                            .then(url => {  
                                                            console.log("download url: "+url); 
                                                            let copiedState = newExpense;
                                                            copiedState["image"] = url;
                                                            setNewExpense(copiedState);
                                                })
                                            blob.close();
                                            return url;
                                        }
                                )
    }

    const handleDateChange = (event, date) => {
        let copiedState = newExpense;
        copiedState["date"] = date;
        setNewExpense(copiedState);
    }

    const handleAmountChange = (event) => {
        let copiedState = newExpense;
        copiedState["amount"] = event.nativeEvent.text;
        setNewExpense(copiedState);
    }

    const handleCategoryChange = (event) => {}

    const onFormSubmit = () => {
        console.log(newExpense);
        const request = new Request();
        request.post('/expenses', newExpense);
        // nav back to landing page
    }

    useEffect(() => {
        currentDate = Date.now();
    },[])





    

    return(
        <View>
            <Text>RECORD EXPENSE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    CameraViewContainer:{
        height: 300,
        // width: 200
    },
    buttonContainer: {
        height: 100
    }

})

export default RecordExpenseScreen;