import React, { Component } from 'react';
import ContatoService from '../services/ContatoService';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : '',
            password : ''
        };

        this.authenticate = this.authenticate.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeUsername = (ev) => {
        this.setState({username : ev.target.value});
    }

    changePassword = (ev) => {
        this.setState({password : ev.target.value});
    }

    authenticate() {
        let user = {
            "username" : this.state.username,
            "password" : this.state.password
        };
        ContatoService.authenticate(user)
            .then(result => {
                localStorage.setItem('token', result.data.jwttoken);
                this.props.history.push('/main');
            })
            .catch(result => {
                console.log(result);
                localStorage.removeItem('token');
                window.alert("Usuário e senha não conferem");
            });
    }

    render(){
        return (
            <div>
                <h2 className="text-center">Login</h2>
                <div className="container">
                    <form className="row">
                        <div className="col-4">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="username" name="username" placeholder="Usuário" value={ this.state.username } onChange={this.changeUsername} required />
                                <label htmlFor="username">Usuário</label>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="password" name="password" placeholder="Senha" value={ this.state.password } onChange={this.changePassword} required />
                                <label htmlFor="password">Senha</label>
                            </div>
                        </div>
                        <div className="col-2">
                            <button type="button" className="btn btn-primary" onClick={this.authenticate}>
                                Logar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login