import axios from 'axios';

const CONTATO_API_URL = "https://profdinho.ddns.net/api/endereco/";

class ContatoService {

    authenticate(user) {
        return axios.post(CONTATO_API_URL + "authenticate", user);
    }
    
    getContatos() {
        return axios.get(CONTATO_API_URL + "contatos/contatos",
            { headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')} });
    }

    getContato(idContato) {
        return axios.get(CONTATO_API_URL + "contatos/contato/" + idContato,
        { headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')} });
    }

    createContato(contato) {
        return axios.post(CONTATO_API_URL + "contatos/contato", contato,
        { headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')} });
    }

    updateContato(contato, idContato) {
        return axios.put(CONTATO_API_URL + "contatos/contato/" + idContato, contato,
        { headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')} });
    }

    deleteContato(idContato) {
        return axios.delete(CONTATO_API_URL + "contatos/contato/" + idContato,
        { headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')} });
    }
}

export default new ContatoService()