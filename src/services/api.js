import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3333"

});

export const getRepositories = async (userId, query) => {
    let url= `/users/${userId}/repositories/`;

    if(query !== ''){
        url += `?q=${query}`;
    }

    return await api.get(url);
};
// Validação
export const createSession = async (email, password) => {
    return api.put('/session', {email, password}); 

};


// Chamada da API para  repositório
export const createRepository = async (userId, repositoryURL) => {
    const url = `/users/${userId}/repositories/`;
    const Repositoryname= getRepositoriesName(repositoryURL);

    return await api.post(url,{name: Repositoryname , url: repositoryURL});
};

export const deleteRepository = async (userId, repositoryId) => {
    const url = `/users/${userId}/repositories/${repositoryId}`;
    
    return await api.delete(url);
};

// Chamada da API para Usuário
export const createUser = async (emailUser, passwordUser) => {
    const url = "/users";

    return await api.post(url, {email: emailUser, password: passwordUser});
}

const getRepositoriesName = (url) =>{
//eslint-disable-next-line
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
    const match = url.match(regex);
    
    console.log('match',match);
    if(match[2]){
        const values = match[2].split('/');
        console.log('values',values);
        return `${values[1]}/${values[2]}`
    }
}
