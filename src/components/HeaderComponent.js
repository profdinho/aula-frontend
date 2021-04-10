import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link className="nav-link btn btn-link" to="/main">
                        Principal
                    </Link>
                    <Link className="nav-link btn btn-link" to="/contatos">
                        Listar Contatos
                    </Link>
                    <Link className="nav-link btn btn-link" to="/add-contato/_add">
                        Adicionar Contato
                    </Link>
                    <Link className="nav-link btn btn-link" to="/login">
                        Login
                    </Link>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent