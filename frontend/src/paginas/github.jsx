import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import PageHeader3 from '../template/pageHeader3'
import Countdown from 'react-countdown-now'
import {URLGit} from '../main/config'

var contagemcomp = 0

const contadorcondition = ({ seconds, completed }) => {
    if (completed) {
        // Render ao completar o countdown
        //window.location.href = URLGit; //Redirecionar à página na guia atual
        contagemcomp=contagemcomp+1
        if(contagemcomp == 1){
            window.open(URLGit, '_blank'); //Redirecionar à página em nova guia
            return <span>Redirecionando...</span>
        }
        return <span>Já foi redirecionado, mas ainda pode entrar pelo link abaixo</span>
        
      
    } else {
      // Render com o countdown em curso
      return <span>Você será redirecionado em {seconds} segundos para o GitHub</span>
    }
};

//TEXTOS
const name1 = <Countdown date={Date.now() + 5000} renderer={contadorcondition}/>
const name2 = <a href={URLGit}> Clique aqui para redirecionar agora</a>
const small2 = <span>Ou copie e cole no navegador: {URLGit}</span>

export default props => (
    <div>
        <PageHeader name='Tarefas' small='GitHub'></PageHeader>
        <PageHeader3 name={name1} small='É só aguardar' />
        <PageHeader3 name={name2} small={small2} />
    </div>
)