import React, {useState, useEffect} from 'react';
import {Marker, GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';

import BotaoVoltar from '../../components/BotaoVoltar';

import api from '../../services/api';

export default function Mapa(props) {
    const [entrega, setEntrega] = useState(null);

    useEffect(() => {
        const id = props.match.params.id;

        async function carregaDados() {
            const dados = await api.get(`/entregas/${id}`);
            setEntrega(dados.data);
        }

        carregaDados();
    }, []);

    return (        
            <div className="container">
                <h1 className="titulo">Mapa</h1>
                {(entrega != null) && <iframe 
                    src={`https://www.google.com/maps/dir/${entrega.localOrigem}/${entrega.localDestino}`} 
                    width="540"
                    height="450"
                    frameBorder="0"
                >
                </iframe>}
            </div>

    );
}

