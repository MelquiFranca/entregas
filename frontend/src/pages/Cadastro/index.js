import React, { useEffect, useState } from 'react';
import BotaoVoltar from '../../components/BotaoVoltar';

import api from '../../services/api';

import './style.css';

export default function Cadastro(props) {
    const [cliente, setCliente] = useState('');
    const [dataEntrega, setDataEntrega] = useState();
    const [localOrigem, setLocalOrigem] = useState('');
    const [localDestino, setLocalDestino] = useState('');

    async function salvarDados() {
        const retorno = await api.post('/entregas', {
            cliente,
            dataEntrega,
            localOrigem,
            localDestino
        });
        
        return retorno.data;
    }

    function handleSubmit(e) {
        e.preventDefault();        

        const retorno = salvarDados();

        if(retorno) {
            // props.history.push('/entregas');
            console.log(retorno);
        }
    }

    return (
        <div className="container">
            <h1 className="titulo">
                Cadastrar Entrega
            </h1>

            <form 
                className="formulario" 
                method="POST"
                onSubmit={e => handleSubmit(e)}
            >
                <div className="formInput">
                    <label htmlFor="">Nome Cliente:</label>
                    <input 
                        type="text" 
                        value={cliente}
                        onChange={e => setCliente(e.value)}
                        placeholder="Digite o nome completo do Cliente"
                        minLength="5"
                        required
                    />
                </div>
                <div className="formInput">
                    <label htmlFor="">Data de Entrega:</label>
                    <input 
                        type="date" 
                        value={dataEntrega}
                        onChange={e => setDataEntrega(e.value)}
                    />
                </div>

                <div className="formInput">
                    <label htmlFor="">Origem:</label>
                    <input 
                        type="text" 
                        value={localOrigem}
                        onChange={e => setLocalOrigem(e.value)}
                        placeholder="Digite o Endereço de Origem"
                        minLength="5"
                        required
                    />
                </div>

                <div className="formInput">
                    <label htmlFor="">Destino:</label>
                    <input 
                        type="text" 
                        value={localDestino}
                        onChange={e => setLocalDestino(e.value)}
                        placeholder="Digite o Endereço de Destino"
                        minLength="5"
                        required
                    />
                </div>
                            
                <div>
                    <button 
                        type="submit"
                        className="btnSalvar"
                    >
                        <i className="fa fa-floppy-o" aria-hidden="true"></i>
                        Salvar
                    </button>   
                    <BotaoVoltar 
                        {...props}
                        rota="/"
                    />  
                </div>           
            </form>
        </div>
        
    );
}