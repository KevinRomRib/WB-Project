import React, { Component } from "react";

import './modalClass.css'
import { Trash } from '../style'

function Excluir() {
    
    // abrir
    function abrir() {
        document.querySelector('.modal').classList.add('show')
    }

    return (
        <>
            <Trash onClick={abrir}>
                <ion-icon name="trash"></ion-icon>
            </Trash>
        </>
    )

}

export default Excluir;