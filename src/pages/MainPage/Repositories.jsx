import React, {useState} from "react";


const Repositories = ({repositorie, OnDeleteRepo, onNewRopo}) => {

    const [newRepo, setNewRepo] = useState("");

    return (
        <div className="repositories">
                <h2 className="title">Repositórios</h2>
                <ul className="list">
                    {
                        repositorie.map((repository) =>
                        (
                        <li className="item" key={repository._id}>
                        <div className="info">
                            <div className="owner">{repository.name.substring(0, repository.name.indexOf('/'))}</div>
                            <div className="name">{repository.name.substring(repository.name.indexOf('/')+1)}</div>
                        </div>
                        <button onClick={()=> OnDeleteRepo(repository)}>delete</button>
                    </li>

                        ))
                    }
                </ul>
                <div className="new">
                    <input 
                        type="url" 
                        name="new-repo" 
                        id="new-repo" 
                        placeholder="Adicionar novo Repositório..."
                        value={newRepo}
                        onChange={(e) => setNewRepo(e.target.value)}
                        />
                    <button onClick={()=>onNewRopo(newRepo)}>Adicionar</button>
                </div>
            </div>
    );


};


export default Repositories;