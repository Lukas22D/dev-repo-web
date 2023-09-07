import React from "react";  

import { BrowserRouter as Router,
         Route, 
         Routes,
         Navigate
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";

//Contextos
import { useContext } from "react";
import { AuthProvider, AuthContext } from './contexts/auth';

const AppRoute = () => {

    const Private = ({children})=>{
        const {authenticated, loading} = useContext(AuthContext);

        if(loading){
            return <h1>Loading...</h1>;
        }

        if(!authenticated){
            return <Navigate to="/login"/>;
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Private><MainPage /></Private>} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
            </Routes>
            </AuthProvider>
        </Router>

    );
};

export default AppRoute;