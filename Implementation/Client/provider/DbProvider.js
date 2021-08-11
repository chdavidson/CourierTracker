import React, { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Button} from 'react-native'
import firebase from 'firebase'
import ColourPalette from '../Constants/ColourPalette'
import { AuthContext } from './AuthProvider';

const DbContext = createContext();

const DbProvider = (props) => {

    const auth = useContext(AuthContext);
    const userData = auth.userData;

    const [users, setUsers] = useState([]);
    // const [workProviders, setWorkProviders] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loaded, setLoaded] = useState(false)


    const getUsers = function() {
        fetch('http://172.19.29.114:8080/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .then(() => console.log("api loaded to state"))
            .catch(err => {console.log(err)})
    }

    useEffect(() => {
        setUsers(getUsers());
    }, [])

    // Matches Authorised user to DB user, holds in state.
    useEffect(() => {
        if(userData && users){
            for(let i=0; i<users.length; i++){
                if(users[i].username === userData.email){
                    setCurrentUser(users[i])
                }
                // else POST new user to DB HERE! :D 
            }
        }
        else{
            console.log("identify user failed userData and users not yet loaded")
        }
    }, [userData])

    useEffect(() => {
        if(currentUser){
            console.log("Current User: "+currentUser.firstName);
        }
    }, [currentUser]);


    return(
        <DbContext.Provider
			value={{
				users,
                currentUser
	
			}}
		>
			{props.children}
		</DbContext.Provider>
    )
}


export { DbContext, DbProvider };