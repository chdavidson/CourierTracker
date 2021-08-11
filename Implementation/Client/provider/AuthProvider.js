import React, { createContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';
const AuthContext = createContext();

const AuthProvider = (props) => {
	// user null = loading
	const [user, setUser] = useState(null);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		checkLogin();
	}, []);

	function checkLogin() {
		firebase.auth().onAuthStateChanged(function (u) {
			if (u) {
				setUser(true);
				setUserData(getUserData());
			} else {
				setUser(false);
				setUserData(null);
			}
		});
	}

	// function getUserData() {
	// 	firebase.auth().onAuthStateChanged(user => {console.log(user)})
	// 	}

	const getUserData = () => {
		const unsubscribe = firebase.auth().onAuthStateChanged(user => {
			user ? setUserData(user) : setUserData(null)
		})

		return unsubscribe
	}
	

	
	// userData ? console.log("user data: " + userData.email) : console.log('loading')
	// userData ? console.log("user data: " + JSON.stringify(userData)) : console.log('loading')
	

	return (
		<AuthContext.Provider
			value={{
				user,
				userData
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};



export { AuthContext, AuthProvider };
