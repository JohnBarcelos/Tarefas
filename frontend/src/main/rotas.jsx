import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Tarefa from '../tarefa/tarefa'
import Sobre from '../paginas/sobre'
import GitHub from '../paginas/github'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Tarefa} />
        <Route path='/sobre' component={Sobre} />
        <Route path='/github' component={GitHub} />
        <Redirect from='*' to='/tarefas' />
    </Router>
)