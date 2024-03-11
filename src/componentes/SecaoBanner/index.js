import React from "react";
import './style.css'

export default function SecaoBanner(props) {

    return (
        <section className={props.tema? 'bannerDark' : 'bannerLight'}>
            <div className="imgBanner"></div>
            <div className="txtBanner">
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}