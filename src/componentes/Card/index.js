import React from "react";
import './style.css'

export default function Card(props) {

    return (
        <div id="card" className={props.tema? 'cardDark' : 'cardLight'}>
                <p>{props.data}</p>
                <h4>{props.titulo}</h4>
                <p>{props.empresa}</p>
                <p>{props.texto}</p>
        </div>
    )
}