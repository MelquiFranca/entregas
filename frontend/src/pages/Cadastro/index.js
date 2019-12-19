import React, { useEffect, useState } from 'react';
import BotaoVoltar from '../../components/BotaoVoltar';

import './style.css';

export default function Cadastro(props) {
    const [cliente, setCliente] = useState('');
    const [dataEntrega, setDataEntrega] = useState(null);
    const [localOrigem, setLocalOrigem] = useState('');
    const [localDestino, setLocalDestino] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div class="container">
            <h1 className="titulo">
                Cadastrar Entrega
            </h1>

            <form 
                className="formulario" 
                method="POST"
                onSubmit={e => handleSubmit(e)}
            >
                <div className="formInput">
                    <label for="">Nome Cliente:</label>
                    <input 
                        type="text" 
                        name="" 
                        value={cliente}
                        onChange={e => setCliente(e.value)}
                        placeholder="Digite o nome completo do Cliente"
                        minLength="5"
                        required
                    />
                </div>
                <div className="formInput">
                    <label for="">Data de Entrega:</label>
                    <input 
                        type="date" 
                        name="" 
                        value={dataEntrega}
                        onChange={e => setDataEntrega(e.value)}
                    />
                </div>

                <div className="formInput">
                    <label for="">Origem:</label>
                    <input 
                        type="text" 
                        name="" 
                        value={localOrigem}
                        onChange={e => setLocalOrigem(e.value)}
                        placeholder="Digite o Endereço de Origem"
                        minLength="5"
                        required
                    />
                </div>

                <div className="formInput">
                    <label for="">Destino:</label>
                    <input 
                        type="text" 
                        name="" 
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
                        <i class="fa fa-floppy-o" aria-hidden="true"></i>
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