import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'

class Login  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'' 
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        if (event.target.id === 'email') {
            this.setState({email: event.target.value});
        }
        else if (event.target.id === 'password') {
            this.setState({password: event.target.value});
        }
      }

      handleSubmit = async (e) => {
        e.preventDefault(); 
        if (!this.state.email.includes('@')){
            alert("Adresse mail invalide");
        }
        else  if (this.state.password.length < 5 ){
            alert("Votre mot de passe doit contenir au moins 5 caractères");
        }
        else {
            let result = await fetch(
            'http://localhost:3000/login', {
                method: "post",
                body: JSON.stringify({ email: this.state.email,  password: this.state.password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.warn(result);
            if (result) {
                alert("Utilisateur connecté !");
                this.setState({});
            }
        }
      }
    render(){
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
                            <input type='email' value={this.state.email} onChange={this.handleChange} id='email' />
                        </div>

                        <div className='formgroup'>
                            <label htmlFor='password'>Mot de Passe</label>
                            <input type='password' value={this.state.password} onChange={this.handleChange} id='password' />
                        </div>

                        <Link to='/forgotpassword'
                            className='stylenone'
                        >
                            <p>Mot de Passe Oublié?</p>
                        </Link>
                        <Link to='/'
                            className='stylenone'

                        >
                            <button className='btn' onClick={this.handleSubmit}>Se connecter</button>
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
}
export default Login
//&