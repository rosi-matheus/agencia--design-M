import React, { useState } from "react";
import './style.css'
import logo from '../../assets/logo.png'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'



export default function Header(props) {

    return (
        <header className={props.tema? 'topoDark' : 'topoLight'}>
            <img className="logo" src={logo} alt="logo"/>
            <button onClick={props.alterarTema}>
                <img src={props.tema? sun : moon} alt="lua" />
            </button>
        </header>
    )
}