import React, { Component } from 'react';
import ContatoService from '../services/ContatoService';

class ListContatosComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            token : '',
            contatos : []
        };

        this.addContato = this.addContato.bind(this);
        this.editContato = this.editContato.bind(this);
        this.deleteContato = this.deleteContato.bind(this);
        /*
        ContatoService.authenticate().then(result => {
            localStorage.setItem('token', result.data.jwttoken);
        });
        */
    }

    deleteContato(id){
        if (window.confirm('Deseja realmente apagar o contato?')) {
            ContatoService.deleteContato(id).then( result => {
                this.setState({contatos: this.state.contatos.filter(contato => contato.id !== id)});
            });
        }
    }

    editContato(id) {
        this.props.history.push('/add-contato/' + id);
    }

    addContato(){
        this.props.history.push('/add-contato/_add');
    }

    componentDidMount() {
        ContatoService.getContatos().then( result => {
            this.setState({ contatos: result.data });
        });
    }

    render(){
        return (
            <div>
                <h2 className="text-center">Lista de Contatos</h2>
                <div className="row">
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={this.addContato}>
                            Adicionar Contato
                        </button>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th> Nome </th>
                                <th> E-mail </th>
                                <th> Celular </th>
                                <th> Data de nascimento </th>
                                <th> &nbsp; </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contatos.map(
                                    contato =>
                                    <tr key={contato.id}>
                                        <td> { contato.nome } </td>
                                        <td> { contato.email } </td>
                                        <td> { contato.celular } </td>
                                        <td> { new Date(contato.dataNascimento).toLocaleDateString() } </td>
                                        <td>
                                            <button className="btn btn-success"
                                                onClick={() => this.editContato(contato.id)}>
                                                Editar
                                            </button>
                                            <button className="btn btn-danger"
                                                onClick={() => this.deleteContato(contato.id)}>
                                                Apagar
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListContatosComponent