import React from 'react';

import BotaoVoltar from '../../components/BotaoVoltar';


export default function Mapa(props) {
    return (        
        <div class="container">
            <h1>Mapa</h1>
            <BotaoVoltar 
                {...props}
                rota="/entregas"
            />
        </div>
        
    );
}