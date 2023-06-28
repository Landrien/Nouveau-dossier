import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'
const ForgotPassword = () => {
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://img.freepik.com/photos-gratuite/vue-dessus-fast-food-mix-batonnets-mozzarella-club-sandwich-hamburger-pizza-aux-champignons-pizza-cesar-salade-crevettes-frites-ketchup-mayo-sauces-au-fromage-table_141793-3998.jpg'
                   alt='signup' />

                <form className='authform'>
                    <h1>Mot de passe oublié</h1>
                   
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Mot de Passe</label>
                            <input type='password' id='password' />
                        </div>
                        <div className='formgroup'>
                        <label htmlFor='cpassword'>Confirmer Nouveau Mot de Passe</label>
                        <input type='password' id='cpassword' />
                    </div>
                    </div>

                    <Link to='/login'
                        className='stylenone'
                    >
                        <p>Réessayez de vous connecter?</p>
                    </Link>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>Vérifier</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
//&