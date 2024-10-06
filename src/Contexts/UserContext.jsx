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
        const storedUserData = JSON.parse(localStorage.getItem('User_Data')); // Storing userData in localStorage
        if (storedToken) {
            setToken(storedToken);
            setUserData(storedUserData);
        }
    }, []);

    return (
        <UserContext.Provider value={{ userData, setUserData, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
};
