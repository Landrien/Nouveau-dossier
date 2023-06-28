import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Votre repas livré où vous voulez
                </h1>
                <p>Nous livrons des repas chaud ou froid à votre porte.
                </p>
            </div>
        </div>
    )
}

export default Footer1