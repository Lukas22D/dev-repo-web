import React, {useState, useContext,} from "react";
import { AuthContext } from "../../contexts/auth";
import "./style.css";

const RegistrePage = () => {

    const {register} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try{
           await register(email, password);
            console.group("Usuário criado com sucesso!");
            
        } catch(error){
            console.log(error);
            console.log("Erro ao criar usuário!");
        }
    }


    return(
        <div id="register">
            <h1 className="tittle">Registre no sistema</h1>
            <form action="" className="form">
                <div className="field">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div className="actions">
                    <button type="submit" onClick={handleRegister}>Registrar</button>
                </div>
            </form>
        </div>
    );
    };


export default RegistrePage;