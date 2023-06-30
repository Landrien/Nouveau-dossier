import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './AuthPage.css'


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            firstName:'',
            email:'',
            password:'',
            cpassword:'' 
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      handleChange(event) {
        if(event.target.id === 'fname'){
            this.setState({firstName: event.target.value});
        }
        else if (event.target.id === 'lname') {
            this.setState({name: event.target.value});
        }
        else if (event.target.id === 'email') {
            this.setState({email: event.target.value});
        }
        else if (event.target.id === 'password') {
            this.setState({password: event.target.value});
        }
        else if (event.target.id === 'cpassword') {
            this.setState({cpassword: event.target.value});
        }
        // console.log('nom: '+this.state.firstName + '\n' + 'prenom: ' +this.state.name 
        // + '\n' + 'mail: '+ this.state.email + '\n' + 'mot de passe: '+ this.state.password);
      }

      handleSubmit = async (e) => {
        e.preventDefault();  
        if (!this.state.email.includes('@')){
            alert("Adresse mail invalide");
        }
        else  if (this.state.password.length < 5 ){
            alert("Votre mot de passe doit contenir au moins 5 caractères");
        }
        else if(this.state.cpassword !== this.state.password){
            alert("Les mots de passes ne correspondent pas");
        }
        else {
            let result = await fetch(
            'http://localhost:3000/register', {
                method: "post",
                body: JSON.stringify({ firstName: this.state.firstName, name: this.state.name, email: this.state.email,
                    password: this.state.password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.warn(result);
            if (result) {
                alert("Utilisateur inscrit !");
                this.setState({});
            }
        }
    }
    render() {
        return (
            <div className='authpage'>
                <Navbar reloadnavbar={false}/>

                <div className='authcont'>
                    <img src='https://img.freepik.com/photos-gratuite/vue-dessus-fast-food-mix-batonnets-mozzarella-club-sandwich-hamburger-pizza-aux-champignons-pizza-cesar-salade-crevettes-frites-ketchup-mayo-sauces-au-fromage-table_141793-3998.jpg'
                        alt='signup' />

                    <form className='authform'>
                        <h1>S'inscrire</h1>
                        <div className='form-group-row'>
                            <div className='formgroup'>
                                <label htmlFor='fname'>Prénom</label>
                                <input type='text' value={this.state.firstName} onChange={this.handleChange} id='fname' />
                            </div>
                            <div className='formgroup'>
                                <label htmlFor='lname'>Nom</label>
                                <input type='text' value={this.state.name} onChange={this.handleChange} id='lname' />
                            </div>
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' value={this.state.email} onChange={this.handleChange} id='email' />
                        </div>

                        <div className='form-group-row'>
                            <div className='formgroup'>
                                <label htmlFor='password'>Mot de Passe</label>
                                <input type='password'value={this.state.password} onChange={this.handleChange} id='password' />
                            </div>
                            <div className='formgroup'>
                            <label htmlFor='cpassword'>Confirmer Mot de Passe</label>
                            <input type='password' value={this.state.cpassword} onChange={this.handleChange} id='cpassword' />
                        </div>
                        </div>

                        <Link to='/login'
                            className='stylenone'
                        >
                            <p>Vous avez déjà un compte?</p>
                        </Link>
                        <Link to='/signup'
                            className='stylenone'
                        >
                            <button className='btn' onClick={this.handleSubmit}>S'inscrire</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signup
//&