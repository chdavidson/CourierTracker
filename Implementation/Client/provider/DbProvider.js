import React, { createContext, useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Button} from 'react-native'
import firebase from 'firebase'
import ColourPalette from '../Constants/ColourPalette'
import { AuthContext } from './AuthProvider';


const DbContext = createContext();

const DbProvider = (props) => {

    const auth = useContext(AuthContext);
    const userData = auth.userData;

    const [users, setUsers] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);


    const getUsers = function() {
        fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .then(() => {grabCurrentUser()})
            //Set loaded
            .catch(err => {console.log(err)})
            
    }


    useEffect(() => {
        setUsers(getUsers());
        // console.log(users);
        // console.log(loaded);
    }, [])// watch on loaded

    const grabCurrentUser = () => {
        
        if(users){
            setCurrentUser(users.filter((user) => {
                console?.log("username: " + user.username)
                console?.log("userData.email: " + userData.email)
                console?.log("matchy matchy: " + String(user.username) == String(userData.email))
                
            }))
        }
        console?.log("current user: " + currentUser)
    }

    

    

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