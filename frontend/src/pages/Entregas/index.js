import React, { useState, useEffect } from 'react';

import BotaoVoltar from '../../components/BotaoVoltar';

import './style.css';

const ENTREGAS = [
    {id: 1, cliente: 'Melquisedeque', dataEntrega: '01/12/2019', localOrigem: 'Engenhoca', localDestino: 'Cinelândia'},
    {id: 2, cliente: 'Melqui', dataEntrega: '02/12/2019', localOrigem: 'Engenhoca', localDestino: 'Cinelândia'},
    {id: 3, cliente: 'Melquisedeque Pereira França', dataEntrega: '03/12/2019', localOrigem: 'Engenhoca', localDestino: 'Cinelândia'},
    {id: 4, cliente: 'Melqui', dataEntrega: '04/12/2019', localOrigem: 'Engenhoca', localDestino: 'Cinelândia'},
    {id: 5, cliente: 'Melqui', dataEntrega: '05/12/2019', localOrigem: 'Engenhoca', localDestino: 'Cinelândia'},
]

export default function Entregas(props) {

    function handleClickLink(id) {
        props.history.push(`/mapa/${id}`);
    }

    return (
        <div className="container">
            <h1 className="titulo">
                Lista de Entregas
            </h1>

            <div className="painel">
                <table >
                    <thead>
                        <tr>
                            <th>
                                <i class="fa fa-user-o" aria-hidden="true"></i>
                                Cliente
                            </th>
                            <th>
                                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                Data de Entrega
                            </th>
                            <th>
                                <i class="fa fa-map-pin" aria-hidden="true"></i>
                                Local de Origem
                            </th>
                            <th>
                                <i class="fa fa-map-pin" aria-hidden="true"></i>
                                Local de Destino
                            </th>
                            <th>
                                <i class="fa fa-map" aria-hidden="true"></i> 
                                Ver Mapa
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ENTREGAS.map(e => (<tr key={e.id}>
                            <td>{e.cliente}</td>                            
                            <td>{e.dataEntrega}</td>                            
                            <td>{e.localOrigem}</td>                            
                            <td>{e.localDestino}</td>                            
                            <td>
                                <a onClick={() => handleClickLink(e.id)} className="linkMapa">                                    
                                    <i class="fa fa-map-marker" aria-hidden="true"></i> Mapa/Trajeto
                                </a>
                            </td>                            
                        </tr>))}
                    </tbody>
                </table>      
            </div>
                          
            <BotaoVoltar 
                {...props}
                rota="/"
            />
        </div>
    );
}