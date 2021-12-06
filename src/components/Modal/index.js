import React from 'react'
import ReactDOM from 'react-dom'

import Logo from "../../logo.png";

import './Modal.css'

function Modal({ children, onClose }) {
    return <div className='modal'>
        <div className='modal-content'>
            <button className='btn' onClick={onClose}>🅧</button>
            <figure className="App-logo">
                <img alt="Giffy logo" src={Logo} />
            </figure>
            {children}
        </div>
    </div>
}

export default function ModalPortal({ children, onClose }) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>
            {children}
        </Modal>,
        document.getElementById('root')
    )
}