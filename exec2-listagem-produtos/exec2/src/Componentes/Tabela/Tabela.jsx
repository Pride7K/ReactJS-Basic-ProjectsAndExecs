import React from "react"

import Data from "../../Data/Produtos"


export default _ =>
    <div>
        <table style={{border:"1px solid black"}}>
            <tr>
                <th>ID</th>
                <th>Nome do Produto</th>
                <th>Preço</th>
            </tr>
            {Data.map(produto => {
                return (<tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.NomeProduto}</td>
                    <td>{produto.Preco}</td>
                </tr>
                )
            })}
        </table>
    </div>

