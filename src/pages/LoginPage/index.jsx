import React, {useState} from "react";
import "./style.css";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => { 
        console.log("Email: ", email);
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
                <button>Registrar</button>
            </div>
            </div>
        </div>


    );
};

export default LoginPage;