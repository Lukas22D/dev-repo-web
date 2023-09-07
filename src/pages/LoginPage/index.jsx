import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./style.css";

const LoginPage = () => {

    const { login } = useContext(AuthContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async () => {
        try {
            await login(email, password);
        } catch (error) {
            console.log(error);
        }    
    };



    return (
        <div id ="login">
            <h1 className="title">Login</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required />
                </div>

            <div className="field">
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value ={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                     />
            </div>
            <div className="action">
                <button onClick={handleLogin}>Entrar</button>
                <button><Link to='/register'>Registrar</Link></button>
            </div>
            </div>
        </div>


    );
};

export default LoginPage;