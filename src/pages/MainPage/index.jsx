//Bibliotecas
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//  componentes
import Nav from "./nav";
import Repositories from "./Repositories";

//contextos
import { AuthContext } from "../../contexts/auth";

//services
import { getRepositories, createRepository, deleteRepository } from "../../services/api";

// css
import "./style.css";


const MainPage = () => {
    const {user, logout } = useContext(AuthContext);

    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadData = async (query = '') => {
        try{
        const response = await getRepositories(user?.id, query);
        setRepositories(response.data);
        setLoading(false);
        }catch(error){
            console.log(error);
            setError(true);
        };
    }

    useEffect(() => {

        (async () => await loadData())();

    }, []);


    const handleLogout = async () => {
        console.log("Saindo...");
        await logout();
    };

    const handleSearch = async (query) => {
        await loadData(query);
    };

    const handleDelete = async (repository) => {
        console.log("Deletando...", repository.userId);
        await deleteRepository(user?.id, repository._id);
        await loadData();
    };

    const handleNewRepo = async (url) => {
        console.log(url);
        try{
            await createRepository(user?.id, url);
            await loadData();

        }catch(error){
            console.log(error);
            setLoading(true);
        }
    };

    if(error){
        return (
            <div className="error">
                Erro ao carregar os dados
                <Link to="/login">Voltar</Link>
            </div>
        );
    };

    if (loading) {
        return (
        <div className="loading">
            Carregando...
        </div>
        );
    };


    return (
        <div id="main">
            <Nav OnLogout={handleLogout} OnSearch={handleSearch} />
            <Repositories repositorie={repositories} OnDeleteRepo={handleDelete} onNewRopo={handleNewRepo} />
        </div>
    );
};

export default MainPage;