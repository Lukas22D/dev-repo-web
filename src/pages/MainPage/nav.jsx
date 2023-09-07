import React, {useState} from"react";

const Nav =({OnLogout, OnSearch}) => {
    const [query, setQuery] = useState("");

    const handleClear = () => {
        setQuery("");
        OnSearch("");
    };

    return(
        <div className="nav">
                <div><h1 className="logo">Repositorio</h1></div>
                <div className="search">
                    <input
                        type="serch"
                        name="query"
                        id="query"
                        placeholder="Pesquisar..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <button onClick={()=>OnSearch(query)}>Procurar</button>
                    <button onClick={handleClear}>Limpar</button>
                </div>
                <div className="logout"><button onClick={OnLogout}>Sair</button></div>
            </div>
    );

}

export default Nav;