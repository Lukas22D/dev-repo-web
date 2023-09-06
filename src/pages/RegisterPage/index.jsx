import React from "react";
import "./style.css";

const RegistrePage = () => {
    return(
        <div id="register">
            <h1 className="tittle">Registre no sistema</h1>
            <form action="" className="form">
                <div className="field">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
    };


export default RegistrePage;