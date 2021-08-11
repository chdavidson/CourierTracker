import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import * as firebase from 'firebase'

const Settings = () => {
    return (
        <>
        <Text>
            Settings
        </Text>
        <View
        style={{
            top: 40
        }}>
        <Button 
              status="danger"
              title="Logout"
              onPress={() => {
                firebase.auth().signOut();
              }}
            />
            </View>
            </>
    )
}

export default Settings
