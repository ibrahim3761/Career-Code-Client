import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
const AuthProvider = ({children}) => {
    const[loading,setLoading] = useState(true);
    const[user,setUser] = useState(null)
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const SignInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        SignInUser,
        signOutUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;