import React from 'react'
import payimg from '../../ASSETS/pay.png'
import logo from '../../ASSETS/logo.png'
import social from '../../ASSETS/social.png'
import './Footer2.css'
import { Link } from 'react-router-dom'
const Footer2 = () => {
  return (
    <div className='footer'>
      <div className='footerin1'>
        <div className='f1'>
          <img src={logo} alt='logo' className='logo' />
          <p>DeliDash est un service de livraison sur Ile-de-France. Nous nous engageons à fournir le plus rapidement possible.</p>
          <img src={social} alt='social' className='social' />

        </div>
        <div className='f2'>
          <h3>Fonctionnement de DeliDash</h3>
          <Link to='/about' className='stylenone'>
            <p>Fonctionnement de DeliDash</p>
          </Link>
          <Link to='/contact' className='stylenone'>
            <p>Contactez-nous</p>
          </Link>
          <p>À propos de l’équipe</p>
          <p>Soutien à la clientèle</p>
        </div>
        <div className='f2'>

          <h3>Our Information</h3>
          <Link to='/privacypolicy' className='stylenone'>
            <p>Politique de confidentialité</p>
          </Link>
          <Link to='/termsandconditions' className='stylenone'>
            <p>Termes et conditions</p>
          </Link>
          <p>Politique de retour</p>
          <p>Plan du site</p>

        </div>
        <div className='f2'>
          <h3>Communauté</h3>
          <p>Annonces</p>
          <p>Centre de réponses</p>
          <p>Forums de discussion</p>
          <p>Donner des œuvres</p>
        </div>
        <div className='f2'>
        <h3>Abonnez-vous maintenant</h3>
          <p>Abonnez-vous avec votre e-mail pour recevoir la newsletter et les nouvelles en vedette en fonction de vos intérêts</p>
          <div className='inputcontainer'>
            <span className='icon1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>

            </span>
            <input type='text' placeholder='Entrer votre mail' />
            <span className='icon2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>

            </span>
          </div>
        </div>
      </div>
      <div className='footerin2'>
        <h3>© Copyright 2023 DeliDash, Inc.  Tous droits réservés</h3>
        <img src={payimg} alt='payimg' />
      </div>
    </div>
  )
}

export default Footer2