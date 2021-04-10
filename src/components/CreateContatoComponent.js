import React, { Component } from 'react';
import ContatoService from '../services/ContatoService';

class CreateContatoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id : this.props.match.params.id,
            nome : '',
            email : '',
            celular : '',
            dataNascimento : ''
        }

        this.saveOrUpdateContato = this.saveOrUpdateContato.bind(this);
        this.changeNome = this.changeNome.bind(this);
        this.changeNascimento = this.changeNascimento.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeCelular = this.changeCelular.bind(this);
    }

    changeNome = (ev) => {
        this.setState({nome : ev.target.value});
    }

    changeNascimento = (ev) => {
        this.setState({dataNascimento : ev.target.value});
    }

    changeEmail = (ev) => {
        this.setState({email : ev.target.value});
    }

    changeCelular = (ev) => {
        this.setState({celular : ev.target.value});
    }

    saveOrUpdateContato = (ev) => {
        ev.preventDefault();
        let contato = {
            nome : this.state.nome,
            email : this.state.email,
            celular : this.state.celular,
            dataNascimento : this.state.dataNascimento
        }
        if ( this.state.id === '_add' ) {
            ContatoService.createContato(contato).then( result => {
                this.props.history.push('/contatos');
            });
        }
        else {
            ContatoService.updateContato(contato, this.state.id).then( result => {
                this.props.history.push('/contatos');
            });
        }
    }

    componentDidMount(){
        if ( this.state.id === '_add') {
            return;
        }
        else {
            ContatoService.getContato(this.state.id).then( result => {
                this.setState({
                    nome : result.data.nome,
                    email : result.data.email,
                    celular : result.data.celular,
                    dataNascimento : result.data.dataNascimento
                });
            });
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="text-center">Adicionar Contato</h2>
                    <form className="row">
                        <div className="col-8">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome" value={ this.state.nome } onChange={this.changeNome} required />
                                <label htmlFor="nome">Nome</label>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="nascimento" name="nascimento" placeholder="Data de nascimento" value={ this.state.dataNascimento } onChange={this.changeNascimento} required />
                                <label htmlFor="nascimento">Data de nascimento</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="email" name="email" placeholder="E-mail" value={ this.state.email } onChange={this.changeEmail} required />
                                <label htmlFor="email">E-mail</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" id="celular" name="celular" placeholder="Celular" value={ this.state.celular } onChange={this.changeCelular} required />
                                <label htmlFor="celular">Celular</label>
                            </div>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-primary" onClick={this.saveOrUpdateContato}>
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateContatoComponent