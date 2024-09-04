import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import {REFRESH_TOKEN, ACCESS_TOKEN} from '../constants';
import { useState } from "react";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const refreshToken = async () => {}

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if(!token){
        setIsAuthenticated(false);
        return
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000
    
  }

    if(isAuthenticated === null) {
        return <div>Loading...</div>
    }
    return isAuthenticated ? children : <Navigate to="/login" />;
}