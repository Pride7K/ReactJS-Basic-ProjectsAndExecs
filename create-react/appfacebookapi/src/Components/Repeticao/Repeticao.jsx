import React from 'react'

import Alunos from "../../Data/alunos"

export default (props) =>{
    var alunos = Alunos;
    return(
        <div>
            <ul style={{listStyle:"none"}}>
                {alunos.map(aluno=>{
                   return <li key={aluno.id}>{aluno.nome} - {aluno.nota}</li>
                })}
            </ul>
        </div>
    )
}