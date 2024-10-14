import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const UserContext = createContext();

// Context Provider component
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState(null);
    // Load user data from localStorage when the app starts
    useEffect(() => {
        const storedToken = localStorage.getItem('Token_Value');
        const storedUserData = JSON.parse(localStorage.getItem('User_Data'));
        
        // console.log("Stored token:", storedToken);  // Debug log
        // console.log("Stored user data:", storedUserData);  // Debug log
        
        if (storedToken) {
            setToken(storedToken);
            setUserData(storedUserData);
        }
    }, []);
    const isAuthenticated = !!token && !!userData;

    return (
        <UserContext.Provider value={{ userData, setUserData, token, setToken,isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};
