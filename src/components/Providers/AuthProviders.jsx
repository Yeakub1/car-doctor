import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const authContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [lodding, setLodding] = useState(true);

    const createUser = (email, password) => {
        setLodding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLodding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLodding(false)
        });
        return unsubscribe();
    }, []);
    const authInfo = {
        user,
        lodding,
        createUser,
        signIn
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;