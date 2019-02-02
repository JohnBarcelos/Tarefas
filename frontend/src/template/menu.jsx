import React from 'react'

export default props => (
    <nav className='navbar navbar-default bg-default'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href="#">
                    <i className='fa fa-tasks'></i> Tarefas
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/tarefas">Cadastro</a></li>
                    <li><a href="#/sobre">Sobre</a></li>
                    <li><a href="#/github">GitHub</a></li>
                </ul>
            </div>
        </div>
    </nav>
)