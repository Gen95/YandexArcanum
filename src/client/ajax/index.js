const host = 'http://localhost:8000/api';

export const getFolderList = (repo, hash, path) =>{
    console.log(repo, hash, path)
    return fetch(`${host}/repos/${(hash && path) ? `${repo}/tree/${hash}/${path}` : repo}`)
        .then(response => response.json()).then(({ result }) => result);
}

export const getRepos = () => fetch(`${host}/repos`)
    .then(response => response.json()).then(({ result }) => result);