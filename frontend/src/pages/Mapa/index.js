import React from 'react';
import {Marker, GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';

import BotaoVoltar from '../../components/BotaoVoltar';


function Mapa(props) {
    return (        
            <GoogleMap 
                defaultZoom={8}
                defaultCenter={{lat: -34.397, lng: 150.644}}                 
            >
                <Marker position={{lat: -34.397, lng: 150.644}} />

            </GoogleMap>    

    );
}

export default withScriptjs(withGoogleMap(Mapa));