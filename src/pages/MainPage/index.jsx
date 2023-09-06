import React from "react";

import "./style.css";

const MainPage = () => {
    const handleLogout = () => {
        console.log("Saindo...");
    };

    const handleSearch = () => {
        console.log("Pesquisando...");
    };

    const handleClear = () => {
        console.log("Limpando...");
    };


    return (
        <div id="main">
        <div className="nav">
            <div><h1 className="logo">Repositorio</h1></div>
            <div className="search">
                <input 
                    type="serch" 
                    name="query"
                    id="query"
                    placeholder="Pesquisar..." 
                    />
                
                <button onClick={handleSearch}>Procurar</button>
                <button onClick ={handleClear}>Limpar</button>           
            </div>
            <div className="logout"><button onClick={handleLogout}>Sair</button></div>
        </div>




        </div>
    );
};

export default MainPage;