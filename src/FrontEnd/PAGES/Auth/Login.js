import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'
const Login = () => {
    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false}/>

            <div className='authcont'>
                <img src='https://img.freepik.com/photos-gratuite/vue-dessus-fast-food-mix-batonnets-mozzarella-club-sandwich-hamburger-pizza-aux-champignons-pizza-cesar-salade-crevettes-frites-ketchup-mayo-sauces-au-fromage-table_141793-3998.jpg'
                    alt='login' />

                <form className='authform'>
                    <h1>Connecter</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='formgroup'>
                        <label htmlFor='password'>Mot de Passe</label>
                        <input type='password' id='password' />
                    </div>

                    <Link to='/forgotpassword'
                        className='stylenone'
                    >
                        <p>Mot de Passe Oublié?</p>
                    </Link>
                    <Link to='/'
                        className='stylenone'

                    >
                        <button className='btn'>Se connecter</button>
                    </Link>
                    <h2 className='or'>OU</h2>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>S'inscrire</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
//&