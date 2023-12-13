import axios from 'axios';
import React, {createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const navigate= useNavigate();
    const [token, setToken_]= useState(localStorage.getItem("token"));

    const [username, setUsername_]=useState(localStorage.getItem("username"));

    const setToken=(newToken)=>{
        setToken_(newToken);

    }
    const setUsername=(newUsername)=>{
        setUsername_(newUsername)
    }

    const Logout= () => {
        setUsername_("");
        setToken_("");
        navigate("/");
    }

    useEffect(()=>{
        if(token && username){
            axios.defaults.headers.common["Authorization"]= "Bearer"+ token;
            localStorage.setItem("token", token);
            localStorage.setItem("username", username);

        }
        else{
            delete axios.defaults.headers.common["Authorization"]
            localStorage.removeItem("token");
            localStorage.removeItem("username");
        }
    },[token, username])

    const contextValue= useMemo(
        ()=>({
            token,
            setToken,
            username,
            setUsername,
            Logout
        }), [token, username]
    );

  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>{
    return useContext(AuthContext);
}

export default AuthProvider;

