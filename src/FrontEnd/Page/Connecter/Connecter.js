import  React from 'react';
import './Connecter.css';
//import { Link } from 'react-router-dom';

class Connecter extends React.Component {
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
        if (event.target.id === 'userName') {
            this.setState({email: event.target.value});
        }
        else if (event.target.id === 'userPassword') {
            this.setState({password: event.target.value});
        }
        console.log('mail: '+ this.state.email +'mot de passe: '+ this.state.password);
      }

      handleSubmit = async (e) => {
        e.preventDefault();  
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
            alert("User connected succesfully");
            this.setState({});
        }
      }
    render(){
        return(<div className="container_c">
                <div className="formContainer_c">
                    <div className="sliderSection_c">
                    </div>
                
                    <div className="formSection_c">

                        <h1>Se Connecter</h1>
                        <div className="inputRow_c">
                            <div className="inputIncon_c">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="100" height="30"><path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"/><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"/></svg>
                            </div>
                            <input type="email" name="userName" value={this.state.email} onChange={this.handleChange} id="userName" placeholder="Adresse Mail"/>
                        </div>

                        <div className="inputRow_c">
                            <div className="inputIncon_c">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="100" height="30"><path d="M19,8V7A7,7,0,0,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM13,18H11V14h2ZM17,8H7V7A5,5,0,0,1,17,7Z"/></svg>
                            </div>
                            <input type="password" name="userPassword" value={this.state.password} onChange={this.handleChange} id="userPassword" placeholder="Mot de Passe"/>
                        </div>
                        
                        <div className="row_c">
                            <div className="col_c">

                            </div>
                            <a href="#" id="forgotPassword_c">Mot de passe oublié?</a>
                        </div>


                        <div className="btnRow_c">
                            <input type="button" value="Connexion" onClick={this.handleSubmit} class="btn_c" id="loginBtn_c"/>
                        </div>

                        <div className="btnRow_c">
                        
                                <input type="button" value="Inscription" class="btn_c" id="signupBtn_c" onclick="window.location.href = 'Inscription.js';"/>
                            
                        </div>


                        <h4>Suivez-nous pour tout savoir sur</h4>

                        <div className="btnRow_c">
                            <a href="#" className="btn btnGroup_c"onClick="window.location.href = 'https://www.facebook.com/CESIingenieurs/';" target="_blank">
                                <img src="https://img.icons8.com/color/48/4a90e2/facebook.png"/>
                                
                            </a>
                            <a href="#" className="btn btnGroup_c"onclick="window.location.href = 'https://www.instagram.com/campus_cesi/?hl=fr';" target="_blank">
                                <img src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png"/>
                                
                            </a>
                            <a href="#" className="btn btnGroup_c" onclick="window.location.href = 'https://www.linkedin.com/company/groupe-cesi/?originalSubdomain=fr';"target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="twitter_c"><path fill="#03A9F4" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path></svg>
        
                            </a>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}
export default Connecter;